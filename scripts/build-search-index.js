import fs from 'fs';
import elasticlunr from '../src/lib/elasticlunr.js';
import { toKabobCase } from './lib/util.js';
import { recipes as getRecipes } from './lib/recipes.js';

const sourceDir = '../src';

const recipes = await getRecipes();

const idx = elasticlunr(function () {
  this.setRef('slug');

  this.addField('title');
  this.addField('description');
  this.addField('ingredients');
  this.addField('instructions');
  this.addField('published');
  this.addField('source');
});

const recipeDocuments = recipes
  .map((recipe) => ({
    slug: toKabobCase(recipe.title),
    title: recipe.title,
    description: recipe.description,
    ingredients: recipe.ingredients.items.join('\n'),
    instructiions: recipe.instructions.join('\n'),
    published: recipe.published.text,
    imageSrc: recipe.img.src,
    imageAlt: recipe.img.alt,
    ...(
      (!recipe.source?.type || recipe.source?.type === 'none')
        ? {}
        : recipe.source.type === 'document'
          ? {
            source: recipe.source.text,
          }
          : { 
            source: recipe.source.url,
          }
    )
  }));

recipeDocuments.forEach(function (doc) {
  idx.addDoc(doc);
});

fs.writeFileSync(`${sourceDir}/search-index.json`, JSON.stringify(idx));

const kbSize = Buffer.byteLength(JSON.stringify(idx), 'utf8') / 1024;

console.log(`success. wrote ${Math.round(kbSize)}kb to src/search-index.json`);