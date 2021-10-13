const { default: axios } = require("axios");
const { MELI_API_BASE_URL } = require("../util/constants");

module.exports = class MeliClient {
  baseUrl;

  constructor() {
    this.baseUrl = MELI_API_BASE_URL;
  }

  getCategory(id) {
    return axios
      .get(`${this.baseUrl}/categories/${id}`)
      .then((res) => res.data);
  }

  getProduct(id) {
    return axios.get(`${this.baseUrl}/items/${id}`).then((res) => res.data);
  }

  getDescription(id) {
    return axios
      .get(`${this.baseUrl}/items/${id}/description`)
      .then((res) => res.data)
      .catch(({ response }) => {
        if (response.status === 404) {
          return { plain_text: "" };
        }
      });
  }

  searchProducts(query) {
    return axios
      .get(`${this.baseUrl}/sites/MLA/search`, {
        params: {
          q: query,
        },
      })
      .then((res) => res.data);
  }
};
