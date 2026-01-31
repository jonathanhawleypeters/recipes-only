<svelte:head>
  <title>High Protein French Toast</title>
  <meta name="description" content="A simple, protein-packed twist on classic French toast" />
</svelte:head>

<div>
  <h2>High Protein French Toast</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/high-protein-french-toast.webp?h=640;320;160&w=640;320;160${img.aspectRatio ? '' : '&aspect=1:1'}"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A stack of golden-brown French toast, garnished with berries." />

  <div>
    <p>1 serving</p>
    <h3>Ingredients</h3>
    <ul><li>3 slices multigrain bread</li><li>6 egg whites (about ¾ cup)</li><li>½ teaspoon vanilla extract (optional)</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Heat a non-stick skillet or griddle over medium heat.</li><li>In a shallow bowl, whisk the egg whites, and optionally vanilla extract, until slightly frothy.</li><li>Dip each slice of bread into the egg whites, making sure both sides are well coated.</li><li>Cook the bread slices for about 2-3 minutes on each side, or until golden brown and the egg whites are fully cooked.</li><li>Serve immediately, optionally with toppings like fruit, cinnamon, or syrup.</li></ol>
  </div>

  <h3>Source</h3><p>A simple, high-protein adaptation of classic French toast. I use Alvarado St Bakery's multigrain bread, which has 6 grams of protein per slice.</p>

  <p>
    Published <time datetime="2024-07-12">12 July 2024</time>
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
  .hero-image-auto {
    height: auto;
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
