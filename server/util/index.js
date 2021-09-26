const {
  CATEGORY_FILTER_ID,
  AUTHOR_NAME,
  AUTHOR_LASTNAME,
} = require("./constants");

module.exports.parseItem = (item) => {
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

module.exports.parseItemsData = (data) => {
  const { filters, available_filters } = data;
  let categories = [...filters, ...available_filters].find((filter) => {
    return filter.id === CATEGORY_FILTER_ID;
  });

  return {
    author: this.buildAuthor(),
    categories: categories.values.map((category) => category.name),
    items: data.results.map(this.parseItem),
  };
};

module.exports.buildAuthor = () => {
  return {
    name: AUTHOR_NAME,
    lastname: AUTHOR_LASTNAME,
  };
};
