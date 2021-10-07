const { default: axios } = require("axios");
const { buildAuthor, buildItems, buildCategories } = require("../../util");

exports.get = function (req, res) {
  const { q } = req.query;
  if (!q) {
    res.status(500);
    res.end();
  }

  axios
    .get(`/sites/MLA/search`, {
      params: req.query,
    })
    .then(({ data }) => {
      const { results } = data;
      res.json({
        author: buildAuthor(),
        items: buildItems(results, 4),
        categories: buildCategories(data),
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.end();
    });
};
