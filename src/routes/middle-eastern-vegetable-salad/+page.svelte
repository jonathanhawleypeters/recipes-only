<svelte:head>
  <title>Middle eastern vegetable salad</title>
  <meta name="description" content="A flavorful salad" />
</svelte:head>

<div>
  <h2>Middle eastern vegetable salad</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/medeterranian-salad.webp?h=640;320;160&w=640;320;160${img.aspectRatio ? '' : '&aspect=1:1'}"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="An over-the-top rendering of a chickpea, tomato, cucumber and feta salad." />

  <div>
    <p>5 servings</p>
    <h3>Ingredients</h3>
    <ul><li>10 scallions, white and green parts, thinly sliced</li><li>1 pound ripe tomatoes, seeded, cored, and ½-inch-diced</li><li>1 hothouse cucumber, halved lengthwise, seeded, and ½-inch-diced</li><li>1 can or jar (12 to 16 ounces) chickpeas, rinsed and drained</li><li>⅓ cup chopped fresh parsley</li><li>⅓ cup chopped fresh mint leaves</li><li>⅓ cup julienned fresh basil leaves</li><li>½ cup freshly squeezed lemon juice</li><li>1 tablespoon minced garlic</li><li>Kosher salt and freshly ground black pepper</li><li>½ cup good olive oil</li><li>8 ounces good feta cheese, ½-inch-diced</li><li>Toasted pita bread, for serving</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Place the scallions, tomatoes, cucumber, chickpeas, parsley, mint, and basil in a large salad bowl and toss to combine.</li><li>In a small bowl or measuring cup, whisk together the lemon juice, garlic, 2 teaspoons salt, and 1 teaspoon pepper. Slowly whisk in the olive oil to make an emulsion. Pour the dressing over the salad, tossing gently to coat all the vegetables. Add the feta, sprinkle with salt and pepper, and toss gently. Serve the salad with the toasted pita bread.</li></ol>
  </div>

  <h3>Source</h3><a href="https://barefootcontessa.com/recipes/middle-eastern-vegetable-salad">https://barefootcontessa.com/recipes/middle-eastern-vegetable-salad</a>

  <p>
    Published <time datetime="2022-09-05">5 September 2022</time>
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
