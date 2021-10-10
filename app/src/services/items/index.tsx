import axios from "axios";

type SearchItemsData = {
  items: Product[];
  categories: string[];
};

export async function searchItems(
  query: string | null
): Promise<SearchItemsData> {
  return axios
    .get("/api/items", {
      params: {
        q: query,
      },
    })
    .then((res) => res.data)
    .catch((err) => console.error(err));
}
