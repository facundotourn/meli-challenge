const MeliClient = require("../../clients/meli");
const { buildAuthor, buildItems, buildCategories } = require("../../util");

exports.get = async function (req, res) {
  const { q } = req.query;
  if (!q) {
    res.status(500);
    res.end();
  }

  new MeliClient()
    .searchProducts(q)
    .then(async (data) => {
      const { results } = data;

      if (!results.length) {
        res.status(404);
        res.end();
        return;
      }

      res.json({
        author: buildAuthor(),
        items: buildItems(results, 4),
        categories: await buildCategories(data),
      });
    })
    .catch(() => {
      res.status(500);
      res.end();
    });
};
