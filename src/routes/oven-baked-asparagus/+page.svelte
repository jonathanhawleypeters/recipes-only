<svelte:head>
  <title>Oven baked asparagus</title>
  <meta name="description" content="Asparagus with good flavor and texture" />
</svelte:head>

<div>
  <h2>Oven baked asparagus</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/oven-baked-asparagus.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A tray of uncooked asparagus on an oven rack. An obviously incorrect (machine-generated) temperature display reads 400°F 405°C (should be 205°C)." />

  <div>
    <p>4 servings</p>
    <h3>Ingredients</h3>
    <ul><li>1 pound asparagus, woody ends removed</li><li>1 clove garlic, minced</li><li>1/2 lemon, juiced</li><li>salt</li><li>pepper</li><li>olive oil</li><li>parmesan cheese</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Pre heat oven to 400° F; 205° C.</li><li>Spread asparagus in an optionally foil lined baking sheet. Drizzle with olive oil. Distribute garlic. Roll asparagus to coat.</li><li>Sprinkle with salt, pepper and parmesan.</li><li>Bake 8 to 10 minutes, until asparagus is approaching your preferred texture. It will keep cooking once removed from the oven.</li><li>Drizzle lemon juice and serve.</li></ol>
  </div>

  

  <p>
    Published <time datetime="2022-03-26">26 March 2022</time>
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
    }
  }
</style>
