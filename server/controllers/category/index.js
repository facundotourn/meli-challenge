const { default: axios } = require("axios");

exports.get = async function (id) {
  return axios.get(`/categories/${id}`).then((res) => res.data);
};
