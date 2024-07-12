<svelte:head>
  <title>Chocolate, peanut butter protein drink</title>
  <meta name="description" content="A halfway decent dessert substitute" />
</svelte:head>

<div>
  <h2>Chocolate, peanut butter protein drink</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/peanut-butter-chocolate-protein-shake.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A peanut butter chocolate protien shake in a shaker bottle surrounded by ingredients like chocolate squares, peanuts and milk." />

  <div>
    <p>1 serving</p>
    <h3>Ingredients</h3>
    <ul><li>1 cup fat free milk</li><li>1 scoop chocolate protein powder</li><li>1 tablespoon peanut powder</li><li>1 teaspoon allulose</li><li>1 pinch salt</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <p>Combine all ingredients in a shaker bottle and shake until combined</p>
  </div>

  <h3>Source</h3><p>I take credit (and blame) for this recipe. It results from my love/hate relationship with chocolate peanut butter flavored desserts.</p>

  <p>
    Published <time datetime="2023-11-21">21 November 2023</time>
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
