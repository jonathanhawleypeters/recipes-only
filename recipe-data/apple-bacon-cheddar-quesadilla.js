const recipe = {
  title: "Apple, bacon, cheddar quesadilla",
  description: "A fun twist on the quesadilla",
  ingredients: {
    serves: 1,
    items: [
      "1 tortilla",
      "2 strips bacon, cooked",
      "1/4 apple, thin sliced",
      "2 ounces grated cheddar cheese",
      "1 tablespoon butter or lard",
    ]
  },
  instructions: [
    "Heat the fat in a pan over medium low",
    "When the fat is melted, lay the tortilla flat in the pan and cover evenly with cheddar",
    "When the cheese is melted, lay the bacon and apple slices over one half of the tortilla, fold, and remove.",
  ],
  published: {
    datetime: '2022-05-23',
    text: '23 May 2022',
  },
  source: {
    type: "document",
    text: "Something I threw together on a whim. It has good textures and flavors. I made it with a cosmic crisp apple. I'd like to try a granny smith."
  },
  "img": {
    "src": "/images/apple-bacon-cheddar-quesadilla.webp",
    "alt": "A cast-iron skillet containing an open-faced quesadilla cooking with bacon and apple slices on top."
  }
};

export default recipe;
