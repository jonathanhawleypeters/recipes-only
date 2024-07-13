<svelte:head>
  <title>Egg Tarts</title>
  <meta name="description" content="A tasty Chinese custard-filled pastry" />
</svelte:head>

<div>
  <h2>Egg Tarts</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/egg-tarts.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="14 golden-brown egg tarts in tins on a baking sheet." />

  <div>
    <p>12 servings</p>
    <h3>Ingredients</h3>
    <ul><li>11 tablespoons unsalted butter</li><li>½ cup granulated sugar</li><li>½ teaspoon salt</li><li>1 large egg</li><li>1 ½ cups all purpose flour</li><li>½ cup granulated sugar</li><li>½ teaspoon cornstarch</li><li>⅛ teaspoon salt</li><li>¾ cup milk</li><li>⅔ cup heavy cream</li><li>8 egg yolks</li><li>1 teaspoon vanilla extract</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Adjust oven rack to lower-middle position, place baking stone or sheet pan on rack, and heat oven to 375°. Lightly grease a 12 cup muffin tin. Stir butter, sugar, and salt in a large bowl until combined. Stir in egg, and then flour until completely combined. Divide dough into 16 portions and roll into balls.</li><li>Press a dough ball into each cup, pressing dough up sides to about ¼ inch from top of cup, and maintaining a thickness about ⅛-inch thick. Chill for 30 minutes.</li><li>Whisk sugar, cornstarch, and salt in a medium bowl. Whisk in milk, cream, yolks, and vanilla until combined.</li><li>Fill each cup with custard to about ⅛-inch from top of crust (don't overfill). Bake until crust is golden and custard is just set, about 20 minutes. Let tarts cool in pan for 15 minutes then carefully transfer to wire rack to cool. Let pan cool, then repeat with remaining dough and custard. Serve room temperature or chilled.</li></ol>
  </div>

  <h3>Source</h3><a href="https://www.seriouseats.com/chinese-egg-custard-tart">https://www.seriouseats.com/chinese-egg-custard-tart</a>

  <p>
    Published <time datetime="2022-03-29">29 March 2022</time>
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
