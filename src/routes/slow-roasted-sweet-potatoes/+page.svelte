<svelte:head>
  <title>Slow Roasted Sweet Potatoes</title>
  <meta name="description" content="A delicious and healthy side dish" />
</svelte:head>

<div>
  <h2>Slow Roasted Sweet Potatoes</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/slow-roasted-sweet-potatoes.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A baking sheet filled with golden brown oven roasted sweet potatoes." />

  <div>
    <p>2 servings</p>
    <h3>Ingredients</h3>
    <ul><li>sweet potatoes</li><li>olive oil</li><li>salt</li><li>black pepper</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Preheat the oven to 350°F (175°C)</li><li>Wash and scrub the sweet potatoes</li><li>Puncture potatoes with a fork several times</li><li>Coat potatoes with olive oil, salt and pepper</li><li>Wrap potatoes in aluminum foil</li><li>Bake for two hours on a cookie sheet</li></ol>
  </div>

  <h3>Source</h3><p>A simple and healthy recipe for oven roasted sweet potatoes.</p>

  <p>
    Published <time datetime="2023-12-26">26 December 2023</time>
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
