const {
  AUTHOR_NAME,
  AUTHOR_LASTNAME,
  CATEGORY_FILTER_ID,
} = require("./constants");

const category = require("../controllers/category");

module.exports.buildItem = (item) => {
  const {
    id,
    title,
    pictures,
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
      decimal: price * 100,
    },
    picture: pictures ? pictures[0].url : "",
    condition,
    free_shipping,
    state: state.name,
    soldQuantity: sold_quantity,
  };
};

module.exports.buildSearchResult = (item) => {
  const {
    id,
    title,
    thumbnail,
    currency_id,
    price,
    condition,
    shipping: { free_shipping },
    seller_address: { state },
  } = item;

  return {
    id,
    title,
    price: {
      currency: currency_id,
      amount: price,
      decimal: price * 100,
    },
    picture: thumbnail,
    condition,
    free_shipping,
    state: state.name,
  };
};

module.exports.buildItems = (results, cant) => {
  results = results.splice(0, cant);

  return results ? results.map(this.buildSearchResult) : [];
};

module.exports.buildAuthor = () => {
  return {
    name: AUTHOR_NAME,
    lastname: AUTHOR_LASTNAME,
  };
};

module.exports.buildCategories = (data) => {
  const { filters, available_filters } = data;

  const categoryFilter = [...filters, ...available_filters].find(
    (filter) => filter.id === CATEGORY_FILTER_ID
  );

  console.log(categoryFilter);

  if (categoryFilter.values[0].path_from_root) {
    return categoryFilter.values[0].path_from_root;
  } else {
    return category.get(categoryFilter.values[0].id).then((productCategory) => {
      return productCategory.path_from_root;
    });
  }
};
