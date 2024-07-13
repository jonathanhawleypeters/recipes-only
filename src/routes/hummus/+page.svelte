<svelte:head>
  <title>Hummus</title>
  <meta name="description" content="Simple, delicious hummus" />
</svelte:head>

<div>
  <h2>Hummus</h2>

  <enhanced:img
  class="hero-image"
  src="/static/images/hummus.webp?h=640;320;160&w=640;320;160&aspect=1:1"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="a bowl of creamy, freshly made hummus" />

  <div>
    <p>4 servings</p>
    <h3>Ingredients</h3>
    <ul><li>1 can chickpeas, drained</li><li>4 ounces tahini</li><li>salt</li></ul>
  </div>

  <div>
    <h3>Instructions</h3>

    <p>Combine chickpeas and tahini in a food processor. Use water to create the correct consistency if needed. Add salt to taste.</p>
  </div>

  <h3>Source</h3><a href="https://x.com/nntaleb/status/1718858461872562592?s=20">https://x.com/nntaleb/status/1718858461872562592?s=20</a>

  <p>
    Published <time datetime="2023-11-23">23 November 2023</time>
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
