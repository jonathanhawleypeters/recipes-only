import fs from 'fs';
import { recipesByKabobName } from './lib/recipes.js';

const routesDir = '../src/routes';

const byKabobName = await recipesByKabobName();

const cards = `<svelte:head>
  <title>Recipes Only</title>
  <meta name="description" content="A simple recipe website" />
</svelte:head>

<div class="cards">
${byKabobName.map(
  ([kabobName, recipe]) =>
` <div class="card">
    <a href="${kabobName}">
      <div class="image-container">
        <enhanced:img
          class="card-image"
          src="/static${recipe.img.src + "?h=320;160&w=320;160&aspect=1:1"}"
          sizes="(min-resolution: 2dppx) 320px, 160px"
          alt="${recipe.img.alt}" />
      </div>
      <div class="link">
        ${recipe.title}
      </div>
    </a>
  </div>`)
  .join('\n')}
</div>

<style>
  .cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px 0;
    width: 100%;
    margin-bottom: 20px;
  }
  .card {
    width: 100%;
  }
  .link {
    margin: 0 auto;
    width: 160px;
    white-space: pre-wrap;
  }
  .image-container {
    width: 160px;
    height: 160px;
    margin: 0 auto;
  }
  .card-image {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 640px) {
    .cards {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px 25px;
    }
    .image-container {
      width: 100%;
      margin: 0 auto;
    }
    .image-container, .card-image {
      width: 100%;
      height: auto;
    }
    .link {
      width: 100%;
      text-align: center;
    }
  }
</style>`;

fs.writeFileSync(`${routesDir}/+page.svelte`, cards);

console.log(`success. wrote ${byKabobName.length} cards to the homepage.`)