import axios from "axios";

export async function searchItems(query) {
  return axios
    .get("/api/items", {
      params: {
        q: query,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
