const {
  CATEGORY_FILTER_ID,
  AUTHOR_NAME,
  AUTHOR_LASTNAME,
} = require("./constants");

module.exports.buildItem = (item) => {
  const {
    id,
    title,
    thumbnail,
    currency_id,
    price,
    condition,
    shipping: { free_shipping },
  } = item;

  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimal: 2,
    },
    picture: thumbnail,
    condition,
    free_shipping,
  };
};

module.exports.buildItems = (results, cant) => {
  results = results.splice(0, cant);

  return results ? results.map(this.buildItem) : [];
};

module.exports.buildAuthor = () => {
  return {
    name: AUTHOR_NAME,
    lastname: AUTHOR_LASTNAME,
  };
};

module.exports.buildCategories = (data) => {
  return [];
};
