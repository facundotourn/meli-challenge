import axios from "axios";

export async function searchItems(query) {
  console.log("query a buscar", query);
  return axios
    .get("/api/items", {
      params: {
        q: query,
      },
    })
    .then((res) => {
      console.log(res.data);
      return res;
    })
    .catch((err) => {
      console.error(err);
    });
}
