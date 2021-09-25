const express = require("express");
const app = express();
const axios = require("axios");

const { parseItemsData, parseItem, buildAuthor } = require("./util");
const { AUTHOR_NAME, AUTHOR_LASTNAME } = require("./util/constants");

const port = 3001;
axios.defaults.baseURL = "https://api.mercadolibre.com";

app.get("/api/items", (req, res) => {
  axios
    .get(`/sites/MLA/search`, {
      params: req.query,
    })
    .then(({ data }) => {
      res.json(parseItemsData(data));
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

app.get("/api/items/:id", (req, res) => {
  const id = req.params.id;

  const itemRequest = axios.get(`/items/${id}`);
  const itemDescriptionRequest = axios.get(`/items/${id}/description`);

  axios
    .all([itemRequest, itemDescriptionRequest])
    .then(
      axios.spread(({ data: itemData }, { data: descriptionData }) => {
        const { plaint_text } = descriptionData;

        res.send({
          author: buildAuthor(),
          item: {
            ...parseItem(itemData),
            description: plaint_text,
          },
        });
      })
    )
    .catch((err) => {
      console.log(err);
      res.status(500);
    });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
