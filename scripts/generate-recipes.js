import fs from 'fs';
import path from 'path';
import recipeSveltePage from './lib/recipe-svelte-page.js';
import { toKabobCase } from './lib/util.js';
import { recipes as getRecipes } from './lib/recipes.js';

const routesDir = '../src/routes';

const recipes = await getRecipes();

const recipesByKabobName = [];

recipes.forEach(recipe => {
    const sveltePage = recipeSveltePage(recipe);
    
    const recipeKabobName = toKabobCase(recipe.title);

    recipesByKabobName.push([recipeKabobName, recipe]);
    
    const recipeDirectory = path.join(routesDir, recipeKabobName);
    
    if (!fs.existsSync(recipeDirectory)){
      fs.mkdirSync(recipeDirectory, { recursive: true });
    }
    
    fs.writeFileSync(`${recipeDirectory}/+page.svelte`, sveltePage);
  });

// const cards = `<svelte:head>
//   <title>Recipes Only</title>
//   <meta name="description" content="A simple recipe website" />
// </svelte:head>

// <div class="cards">
// ${recipesByKabobName.map(
//   ([kabobName, recipe]) =>
// ` <div class="card">
//     <a href="${kabobName}">
//       <div class="image-container">
//         <enhanced:img
//           class="card-image"
//           src="/static${recipe.img.src + "?h=320;160&w=320;160&aspect=1:1"}"
//           sizes="(min-resolution: 2dppx) 320px, 160px"
//           alt="${recipe.img.alt}" />
//       </div>
//       <div class="link">
//         ${recipe.title}
//       </div>
//     </a>
//   </div>`)
//   .join('\n')}
// </div>

// <style>
//   .cards {
//     display: flex;
//     flex-wrap: wrap;
//   }
//   .card {
//     width: 200px;
//     margin-bottom: 20px;
//   }
//   .link {
//     margin: 0 auto;
//     width: 160px;
//     white-space: pre-wrap;
//   }
//   .image-container {
//     width: 160px;
//     height: 160px;
//     margin: 0 auto;
//   }
//   .card-image {
//     width: 160px;
//     height: 160px;
//   }
// </style>`;

// fs.writeFileSync(`${routesDir}/+page.svelte`, cards);

