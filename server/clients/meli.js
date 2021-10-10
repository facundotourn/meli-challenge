const { default: axios } = require("axios");

module.exports = class MeliClient {
  baseUrl;

  constructor() {
    this.baseUrl = "https://api.mercadolibre.com";
  }

  getCategory(id) {
    return axios
      .get(`${this.baseUrl}/categories/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  getProduct(id) {
    return axios
      .get(`${this.baseUrl}/items/${id}`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  getDescription(id) {
    return axios
      .get(`${this.baseUrl}/items/${id}/description`)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }

  searchProducts(query) {
    return axios
      .get(`${this.baseUrl}/sites/MLA/search`, {
        params: {
          q: query,
        },
      })
      .then((res) => res.data)
      .catch((err) => console.log(err));
  }
};
