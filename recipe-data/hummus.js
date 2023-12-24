/**
 * @typedef {'teaspoon' | 'tablespoon' | 'ounce' | 'pound' | 'cup' | 'handful' | 'clove' | 'cube' | 'strip' | 'tortilla' | 'can' | 'apple' | 'onion' | 'lemon' | 'eggplant' | 'potato' | 'zucchini' | 'egg' | 'scoop' | 'pinch'} Unit
 */

/**
 * @typedef {Object} IngredientDescription
 * @property {string} [description]
 * @property {string} [preparation]
 * @property {number} [quantity]
 * @property {Unit} [units]
 */

/**
 * @typedef {Object} Ingredients
 * @property {number} serves
 * @property {Array<IngredientDescription>} items
 */

/**
 * @typedef {Object} Published
 * @property {string} datetime
 * @property {string} text
 */

/**
 * @typedef {Array<string>} Instructions
 */

/**
 * @typedef {Object} Source
 * @property {'url' | 'document' | 'none'} type
 * @property {string} [url]
 * @property {string} [text]
 */

/**
 * @typedef {Object} Image
 * @property {string} src
 * @property {string} alt
 */

/**
 * @typedef {Object} RecipeData
 * @property {string} title
 * @property {string} description
 * @property {Ingredients} ingredients
 * @property {Instructions} instructions
 * @property {Published} published
 * @property {Source} [source]
 * @property {Image} img
 */

const recipe = {
  title: "Hummus",
  description: "Simple, delicious hummus",
  ingredients: {
    serves: 4,
    items: [
      "1 can chickpeas, drained",
      "4 ounces tahini",
      "salt",
    ]
  },
  instructions: [
    "Combine chickpeas and tahini in a food processor. Use water to create the correct consistency if needed. Add salt to taste."
  ],
  published: {
    datetime: '2023-11-23',
    text: '23 November 2023',
  },
  source: {
    type: "url",
    url: "https://x.com/nntaleb/status/1718858461872562592?s=20",
  },
  img: {
    src: "/images/hummus.webp",
    alt: "a bowl of creamy, freshly made hummus",
  }
};

export default recipe;