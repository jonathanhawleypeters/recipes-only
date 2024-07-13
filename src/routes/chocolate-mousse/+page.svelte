<svelte:head>
  <title>Chocolate Mousse</title>
  <meta name="description" content="’Tis substantial happiness to eat. -Alexander Pope" />
</svelte:head>

<div>
  <h2>Chocolate Mousse</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/chocolate-mousse.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="An image of a dessert setting featuring individual glass cups of chocolate mousse with whipped cream on top, each garnished with a mint leaf and espresso beans. A silver espresso maker, a white teapot, and a bottle of Grand Marnier are in the background, on a table with a white floral-patterned tablecloth. Each cup is on a small plate with a spoon beside it, under soft, warm lighting." />

  <div>
    <p>8 servings</p>
    <h3>Ingredients</h3>
    <ul><li>1½ cups chocolate chips</li><li>½ cup prepared espresso coffee</li><li>½ cup Grand Marnier</li><li>4 egg yolks</li><li>2 cups heavy cream</li><li>¼ cup sugar</li><li>8 egg whites</li><li>Pinch of salt</li><li>½ teaspoon vanilla</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Melt chocolate chips in a heavy saucepan over very low heat, stirring.</li><li>Add espresso coffee. Stir in liqueur. Cool to room temperature.</li><li>Add egg yolks one at a time, beating thoroughly after each addition until thickened.</li><li>Whip 1 cup of cream until stiff. Gradually beat in sugar, beating until stiff. Beat egg yolks with salt until stiff. Gently beat egg whites into cream.</li><li>Fold egg whites into cream.</li><li>Stir about ⅓ of cream and egg mixture thoroughly into chocolate mixture. Then scrape remaining cream and egg mixture over lightened chocolate base and fold together gently.</li><li>Pour into individual dessert cups or serving bowl. Chill in refrigerator for 2 hours.</li><li>Serve with other cup of whipped cream, whipped.</li></ol>
  </div>

  <h3>Source</h3><p>This recipe is from the kitchen of Pat Stansell.</p>

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
