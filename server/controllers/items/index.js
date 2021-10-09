const { default: axios } = require("axios");
const { buildAuthor, buildItems, buildCategories } = require("../../util");

exports.get = async function (req, res) {
  const { q } = req.query;
  if (!q) {
    res.status(500);
    res.end();
  }

  axios
    .get(`/sites/MLA/search`, {
      params: req.query,
    })
    .then(async ({ data }) => {
      const { results } = data;

      if (!results.length) {
        res.json({
          author: buildAuthor(),
          items: [],
          categories: [],
        });
        return;
      }

      res.json({
        author: buildAuthor(),
        items: buildItems(results, 4),
        categories: await buildCategories(data),
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500);
      res.end();
    });
};
