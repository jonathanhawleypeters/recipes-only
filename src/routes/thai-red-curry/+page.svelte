<svelte:head>
  <title>Thai Red Curry</title>
  <meta name="description" content="A fragrant and spicy coconut-based curry with vegetables" />
</svelte:head>

<div>
  <h2>Thai Red Curry</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/thai-red-curry.png?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="A bowl of vibrant red curry with colorful vegetables and fresh herbs, served with jasmine rice" />

  <div>
    <p>4 servings</p>
    <h3>Ingredients</h3>
    <ul><li>2 cans coconut milk (do not shake, cream must be separated)</li><li>3-4 tablespoons Thai red curry paste (Maesri brand is good)</li><li>2 chicken breasts, thin sliced (easy if partially frozen)</li><li>1 red bell pepper, sliced</li><li>1 onion, sliced</li><li>1 cup butternut squash or eggplant, cubed and roasted</li><li>1 can bamboo shoots</li><li>4 kaffir lime leaves</li><li>2 tablespoons fish sauce</li><li>1 tablespoon palm sugar or brown sugar</li><li>Thai basil leaves</li><li>jasmine rice for serving</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>In a large pot over medium-high heat, heat the thick cream from the top of the coconut milk until oil separates</li><li>Add red curry paste and fry until fragrant (2-3 minutes)</li><li>Add chicken and cook until nearly done</li><li>Add remaining coconut milk and bring to a gentle simmer</li><li>Add bell pepper, onion, and bamboo shoots</li><li>Add kaffir lime leaves, fish sauce, and sugar</li><li>Reduce heat to medium-low and simmer for 10-15 minutes until vegetables are tender</li><li>Taste and adjust seasonings (add more fish sauce for salt, sugar for sweetness, or curry paste for heat)</li><li>Stir in Thai basil leaves</li><li>Serve hot with jasmine rice</li></ol>
  </div>

  <h3>Source</h3><p>Adapted from traditional Thai cuisine</p>

  <p>
    Published <time datetime="2024-12-28">28 December 2024</time>
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
