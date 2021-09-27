const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

app.use(cors());

const { parseItemsData, parseItem, buildAuthor } = require("./util");

const port = 3001;
axios.defaults.baseURL = "https://api.mercadolibre.com";

app.get("/api/items", (req, res) => {
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
        const { plain_text } = descriptionData;

        res.send({
          author: buildAuthor(),
          item: {
            ...parseItem(itemData),
            description: plain_text,
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
