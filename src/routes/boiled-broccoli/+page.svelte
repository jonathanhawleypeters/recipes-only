<svelte:head>
  <title>Boiled Broccoli</title>
  <meta name="description" content="A quick, substantial vegetable side dish" />
</svelte:head>

<div>
  <h2>Boiled Broccoli</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/boiled-broccoli.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A large pot of broccoli steaming and boiling on a stovetop" />

  <div>
    <p>2 servings</p>
    <h3>Ingredients</h3>
    <ul><li>3 cups broccoli florets</li><li>salt</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Bring two quarts (or litres) of generously salted water to a vigorous boil.</li><li>Boil broccoli florets for one minute and 45 seconds.</li><li>Drain away water through a collander or strainer.</li><li>Cool briefly before serving.</li></ol>
  </div>

  <h3>Source</h3><p>This is the laziest, fastest way I know to cook broccoli satisfactorily</p>

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
    margin: 0 0 20px 20px;
  }
  @media (max-width: 640px) {
    .hero-image {
      float: none;
      width: 100%;
      height: auto;
      margin: 0;
    }
  }
</style>
