import fs from 'fs';
import path from 'path';
import { toKabobCase } from './util.js';

export async function recipes() {
  let recipeFiles;
  
  try {
    recipeFiles = fs.readdirSync('../recipe-data');
  } catch (error) {
    console.warn('try running this from the scripts directory');
    console.error(error);
    process.exit();
  }
  
  const recipeModules = await Promise.all(recipeFiles
    .filter(file => path.extname(file) === '.js')
    .map(file => {
      const filePath = path.join('../../recipe-data', file);
      return import(filePath);
    }));
  
  const recipes = recipeModules.map(mod => mod.default);
  
  return recipes;
}

export async function recipesByKabobName() {
  const data = await recipes();

  const byKabobName = data.map(recipe => [toKabobCase(recipe.title), recipe]);

  return byKabobName;
}
