const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const items = require("./controllers/items");
const item = require("./controllers/item");

app.use(cors());

const PORT = process.env.PORT || 3001;
axios.defaults.baseURL = "https://api.mercadolibre.com";

app.get("/api/items", items.get);

app.get("/api/items/:id", item.get);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
