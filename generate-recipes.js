import fs from 'fs';
import path from 'path';
import recipeSveltePage from './recipe-svelte-page.js';

const recipeDataDir = './recipe-data';
const routesDir = './src/routes';

function toKabobCase(str) {
  return str
    .replace(/[^a-zA-Z ]/g, '')
    .toLowerCase()
    .split(' ').join('-')
    .replace(/^-+|-+$/g, '');
}

const recipeFiles = fs.readdirSync(recipeDataDir);

const recipes = await Promise.all(recipeFiles
  .filter(file => path.extname(file) === '.js')
  .map(file => {
    const filePath = path.join(recipeDataDir, file);
    return import(`./${filePath}`);
  }));

const recipeKabobNames = [];

recipes.map(mod => mod.default)
  .forEach(recipe => {
    const sveltePage = recipeSveltePage(recipe);
    
    const recipeKabobName = toKabobCase(recipe.title);

    recipeKabobNames.push([recipe.title, recipeKabobName]);
    
    const recipeDirectory = path.join(routesDir, recipeKabobName);
    
    if (!fs.existsSync(recipeDirectory)){
      fs.mkdirSync(recipeDirectory, { recursive: true });
    }
    
    fs.writeFileSync(`${recipeDirectory}/+page.svelte`, sveltePage);
  });

// const links = recipeKabobNames.map(([title, name]) => `<a href="${name}">${title}</a>`).join('\n');

// fs.writeFileSync(`${routesDir}/+page.svelte`, links);

