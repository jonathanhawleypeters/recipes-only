

const recipeSveltePage = (recipe) => {
  const { title, description, ingredients, instructions, published, source, img } = recipe;
  const { datetime, text } = published;
  const servings = ingredients.serves;

  return `<svelte:head>
  <title>${title}</title>
  <meta name="description" content="${description}" />
</svelte:head>

<div>
  <h2>${title}</h2>

  ${img
    ? `<enhanced:img
  class="hero-image${img.aspectRatio ? ' hero-image-auto' : ''}"
  src="/static${img.src + "?h=640;320;160&w=640;320;160${img.aspectRatio ? '' : '&aspect=1:1'}"}"
  sizes="(min-resolution: 2dppx) 640px, 320px"
  alt="${img.alt}" />`
    : ''}

  <div>
    <p>${servings} ${servings > 1 ? 'servings' : 'serving'}</p>
    <h3>Ingredients</h3>
    <ul>${ingredients.items.map(item => `<li>${item}</li>`).join('')}</ul>
  </div>

  <div>
    <h3>Instructions</h3>

    ${instructions.length === 1
      ? `<p>${instructions[0]}</p>`
      : `<ol>${instructions.map(instruction => `<li>${instruction}</li>`).join('')}</ol>`
    }
  </div>

  ${
    typeof source?.type === 'string'
      ? source.type === 'url'
        ? `<h3>Source</h3><a href="${source.url}">${source.url}</a>`
        // source.type === 'document'
        : `<h3>Source</h3><p>${source.text}</p>`
      : ''
  }

  <p>
    Published <time datetime="${datetime}">${text}</time>
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
`;
};

export default recipeSveltePage;