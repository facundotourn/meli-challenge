const MeliClient = require("../../clients/meli");
const { buildItem, buildAuthor } = require("../../util");

exports.get = function (req, res) {
  const id = req.params.id;

  const meli = new MeliClient();

  Promise.all([meli.getProduct(id), meli.getDescription(id)])
    .then(([itemData, descriptionData]) => {
      const { plain_text } = descriptionData;

      meli.getCategory(itemData.category_id).then(({ path_from_root }) => {
        res.send({
          author: buildAuthor(),
          item: {
            ...buildItem(itemData),
            description: plain_text,
            categories: path_from_root.map((c) => c.name),
          },
        });
      });
    })
    .catch((err) => {
      res.status(err.response.status);
      res.send(err.response.data);
    });
};
