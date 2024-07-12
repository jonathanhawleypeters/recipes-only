<svelte:head>
  <title>Vegetable Gratin</title>
  <meta name="description" content="A browned, cheese-crusted vegetable side dish" />
</svelte:head>

<div>
  <h2>Vegetable Gratin</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/vegetable-gratin.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A casserole dish containing vegetable gratin rests on a table surrounded by parmesan cheese, olive oil, zucchini, onion, and a spoonfull of salt" />

  <div>
    <p>4 servings</p>
    <h3>Ingredients</h3>
    <ul><li>good olive oil</li><li>1 onion, thin sliced</li><li>1 Japanese eggplant, thin sliced</li><li>1 zucchini, thin sliced</li><li>1 potato, thin sliced</li><li>parmesan cheese, grated</li><li>salt</li><li>pepper</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Pre-heat the oven to 375° F; 190° C</li><li>Coat a medium to deep oven dish with olive oil. Layer half of the vegetables, in an alternating pattern, covering the bottom of the dish. The more snugly slices lay together, the less likely they will be to bake into vegetable crisps. Sprinkle with salt, pepper and drizzle with olive oil.</li><li>Repeat with the remaining vegetables, building and seasoning a second layer.</li><li>Cover the dish with aluminum foil and bake for 30 - 35 minutes. Remove the dish carefully, discarding foil. Cover generously with parmesan cheese.</li><li>Replace dish in the oven and continue baking 20 minutes until cheese is golden brown. Serve hot. Reheats well.</li></ol>
  </div>

  

  <p>
    Published <time datetime="2022-03-24">24 March 2022</time>
  </p>

</div>

<style>
  ul {
    padding-left: 20px;
  }
  ul li {
    list-style: none;
    line-height: 1.2;
  }
  ol li {
    padding-bottom: 8px;
  }
  .hero-image {
    float: right;
    width: 320px;
    height: 320px;
  }
  @media (max-width: 640px) {
    .hero-image {
      float: none;
      width: 100%;
      height: auto;
    }
  }
</style>
