<svelte:head>
  <title>Rice and Beans</title>
  <meta name="description" content="An affordable rice and beans recipe from Paul Graham&#39;s essay &#39;Ramen Profitable&#39;" />
</svelte:head>

<div>
  <h2>Rice and Beans</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/rice-and-beans.webp?h=640;320;160&w=640;320;160${img.aspectRatio ? '' : '&aspect=1:1'}"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A bowl with rice and beans garnished with cilantro rests on a table" />

  <div>
    <p>2 servings</p>
    <h3>Ingredients</h3>
    <ul><li>olive oil or butter</li><li>1 onion yellow onion</li><li>other fresh vegetables; experiment</li><li>3 cloves garlic</li><li>1 can white, kidney, or black beans</li><li>1 cube Knorr beef or vegetable bouillon</li><li>1 teaspoon freshly ground black pepper</li><li>3 teaspoons ground cumin</li><li>1 cup dry rice, preferably brown</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Put rice in rice cooker. Add water as specified on rice package. (Default: 2 cups water per cup of rice.) Turn on rice cooker and forget about it.</li><li>Chop onions and other vegetables and fry in oil, over fairly low heat, till onions are glassy. Put in chopped garlic, pepper, cumin, and a little more fat, and stir. Keep heat low. Cook another 2 or 3 minutes, then add beans (don't drain the beans), and stir. Throw in the bouillon cube(s), cover, and cook on lowish heat for at least 10 minutes more. Stir vigilantly to avoid sticking.</li><li>If you want to save money, buy beans in giant cans from discount stores. Spices are also much cheaper when bought in bulk. If there's an Indian grocery store near you, they'll have big bags of cumin for the same price as the little jars in supermarkets.</li></ol>
  </div>

  <h3>Source</h3><p>The recipe appears in the essay Ramen Profitable by Paul Graham under the title Rice and Beans for 2n.</p>

  <p>
    Published <time datetime="2022-03-24">24 March 2022</time>
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
