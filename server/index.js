const express = require("express");
const path = require("path");
const app = express();
const cors = require("cors");

const items = require("./controllers/items");
const item = require("./controllers/item");

app.use(cors());

const PORT = process.env.PORT || 3001;

app.get("/api/items", items.get);
app.get("/api/items/:id", item.get);

app.use(express.static(path.resolve(__dirname, "../app/build")));

app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "../app/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
