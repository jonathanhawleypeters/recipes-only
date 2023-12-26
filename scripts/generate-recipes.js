import fs from 'fs';
import path from 'path';
import recipeSveltePage from './lib/recipe-svelte-page.js';
import { toKabobCase } from './lib/util.js';
import { recipes as getRecipes } from './lib/recipes.js';

const routesDir = '../src/routes';

const recipes = await getRecipes();

recipes.forEach(recipe => {
    const sveltePage = recipeSveltePage(recipe);
    
    const recipeKabobName = toKabobCase(recipe.title);

    const recipeDirectory = path.join(routesDir, recipeKabobName);
    
    if (!fs.existsSync(recipeDirectory)){
      fs.mkdirSync(recipeDirectory, { recursive: true });
    }
    
    fs.writeFileSync(`${recipeDirectory}/+page.svelte`, sveltePage);
  });
