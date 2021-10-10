import axios from "axios";

type GetItemData = {
  item: Product;
};

export async function getItem(id: string): Promise<GetItemData> {
  return axios
    .get(`/api/items/${id}`)
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
