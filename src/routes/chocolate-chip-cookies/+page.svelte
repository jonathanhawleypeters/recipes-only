<svelte:head>
  <title>Chocolate chip cookies</title>
  <meta name="description" content="My favorite chocolate chip recipe" />
</svelte:head>

<div>
  <h2>Chocolate chip cookies</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/chocolate-chip-cookies.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="Freshly baked chocolate-chip cookies on a wooden countertop surrounded by choclate chips, chunks and other ingredients." />

  <div>
    <p>36 servings</p>
    <h3>Ingredients</h3>
    <ul><li>1 cup salted butter, softened</li><li>1 cup white (granulated) sugar</li><li>1 cup light brown sugar, packed</li><li>1 teaspoon pure vanilla extract</li><li>2 large eggs</li><li>3 cups all-purpose flour</li><li>1 teaspoon baking soda</li><li>1/2 teaspoon baking powder</li><li>1 teaspoon sea salt</li><li>12 ounces chocolate chips</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <ol><li>Preheat oven to 375 degrees F. Line a baking pan with parchment paper and set aside.</li><li>In a separate bowl mix flour, baking soda, salt, baking powder. Set aside.</li><li>Cream together butter and sugars until combined.</li><li>Beat in eggs and vanilla until fluffy.</li><li>Mix in the dry ingredients until combined.</li><li>Add 12 oz package of chocolate chips and mix well.</li><li>Roll 2-3 TBS (depending on how large you like your cookies) of dough at a time into balls and place them evenly spaced on your prepared cookie sheets. (alternately, use a small cookie scoop to make your cookies).</li><li>Bake in preheated oven for approximately 8-10 minutes. Take them out when they are just BARELY starting to turn brown.</li><li>Let them sit on the baking pan for 2 minutes before removing to cooling rack.</li></ol>
  </div>

  <h3>Source</h3><a href="https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies">https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies</a>

  <p>
    Published <time datetime="2022-08-13">13 August 2022</time>
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
