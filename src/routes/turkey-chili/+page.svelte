<svelte:head>
  <title>Turkey Chili</title>
  <meta name="description" content="A hearty and flavorful chili recipe" />
</svelte:head>

<div>
  <h2>Turkey Chili</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/turkey-chili.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A steaming bowl of chili with colorful bell peppers and turkey." />

  <div>
    <p>5 servings</p>
    <h3>Ingredients</h3>
    <ul><li>2 lbs lean ground turkey</li><li>2 (15 ½ ounce) cans kidney beans, drained and rinsed</li><li>1 large onion, chopped</li><li>1 large tomato, chopped</li><li>½ lb carrots, peeled and sliced</li><li>2 bell peppers (1 green, 1 red), cut into ½-inch squares</li><li>1 (46 fluid ounce) container V8 vegetable juice</li><li>¼ cup potato flakes</li><li>2 tablespoons chili powder</li><li>½ teaspoon cumin</li><li>1 teaspoon paprika</li><li>½ teaspoon celery seed</li><li>½ teaspoon fresh ground pepper</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>In a large skillet, brown the ground turkey, one pound at a time, over high heat together with the onions. If your skillet or wok is large enough, you can brown the turkey all at once to save time.</li><li>On the last batch, add the spices after the turkey is browned and continue frying for another couple of minutes.</li><li>Add the browned turkey to a very large pot with a lid, and then add the beans, tomatoes, carrots, peppers, and V8 juice.</li><li>Bring to a boil and then reduce heat to simmer.</li><li>Stir in the potato flakes, cover, and simmer for an additional 30 minutes.</li></ol>
  </div>

  <h3>Source</h3><p>My adaptation of a classic bodybuilding community recipe. I removed the garlic, substituted regular V8 for the spicy variant, used potato flakes instead of cashew meal, and replaced ground beef with ground turkey. Search "Dr. John's chili" for the original.</p>

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
  @media (max-width: 640px) {
    .hero-image {
      float: none;
      width: 100%;
      height: auto;
      margin: 0;
    }
  }
</style>
