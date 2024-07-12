<svelte:head>
  <title>Boiled Carrots</title>
  <meta name="description" content="A fast vegetable side dish" />
</svelte:head>

<div>
  <h2>Boiled Carrots</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/boiled-carrots.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A large bowl of steaming, just-cooked carrot pieces." />

  <div>
    <p>2 servings</p>
    <h3>Ingredients</h3>
    <ul><li>2 cups of ¾ inch chopped carrots</li><li>salt (optional)</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Bring two quarts (or litres) of water to a vigorous boil. Salt if desired.</li><li>Boil chopped carrots for two minutes.</li><li>Drain away water through a collander or strainer.</li><li>Allow to cool before serving.</li></ol>
  </div>

  <h3>Source</h3><p>This is the laziest, fastest way I know to cook carrots satisfactorily</p>

  <p>
    Published <time datetime="2023-12-29">19 December 2023</time>
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
