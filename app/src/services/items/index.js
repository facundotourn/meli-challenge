import axios from "axios";

export function searchItems(query) {
  console.log("query a buscar", query);
  axios
    .get("/api/items", {
      params: {
        q: query,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
}
