import axios from "axios";

export async function getItem(id) {
  return axios
    .get(`/api/items/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
