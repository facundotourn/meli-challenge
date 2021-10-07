const { AUTHOR_NAME, AUTHOR_LASTNAME } = require("./constants");

module.exports.buildItem = (item) => {
  const {
    id,
    title,
    thumbnail,
    currency_id,
    price,
    condition,
    shipping: { free_shipping },
    seller_address: { state },
    sold_quantity,
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
    state: state.name,
    soldQuantity: sold_quantity,
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
