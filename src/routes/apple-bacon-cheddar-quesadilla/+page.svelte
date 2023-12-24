<svelte:head>
  <title>Apple, bacon, cheddar quesadilla</title>
  <meta name="description" content="A fun twist on the quesadilla" />
</svelte:head>

<div>
  <h2>Apple, bacon, cheddar quesadilla</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/apple-bacon-cheddar-quesadilla.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A cast-iron skillet containing an open-faced quesadilla cooking with bacon and apple slices on top." />

  <div>
    <p>1 serving</p>
    <h3>Ingredients</h3>
    <ul><li>1 tortilla</li><li>2 strips bacon, cooked</li><li>1/4 apple, thin sliced</li><li>2 ounces grated cheddar cheese</li><li>1 tablespoon butter or lard</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Heat the fat in a pan over medium low</li><li>When the fat is melted, lay the tortilla flat in the pan and cover evenly with cheddar</li><li>When the cheese is melted, lay the bacon and apple slices over one half of the tortilla, fold, and remove.</li></ol>
  </div>

  <h3>Source</h3><p>Something I threw together on a whim. It has good textures and flavors. I made it with a cosmic crisp apple. I'd like to try a granny smith.</p>

  <p>
    Published <time datetime="2022-05-23">23 May 2022</time>
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
