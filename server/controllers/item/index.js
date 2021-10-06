const { default: axios } = require("axios");
const { buildItem, buildAuthor } = require("../../util");

exports.get = function (req, res) {
  const id = req.params.id;

  const itemRequest = axios.get(`/items/${id}`);
  const itemDescriptionRequest = axios.get(`/items/${id}/description`);

  axios
    .all([itemRequest, itemDescriptionRequest])
    .then(
      axios.spread(({ data: itemData }, { data: descriptionData }) => {
        const { plain_text } = descriptionData;

        res.send({
          author: buildAuthor(),
          item: {
            ...buildItem(itemData),
            description: plain_text,
          },
        });
      })
    )
    .catch(() => {
      res.status(500);
      res.send("Internal server error");
    });
};
