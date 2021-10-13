type SearchItemsData = {
  items: SearchProduct[];
  categories: string[];
};

export async function searchItems(
  query: string | null
): Promise<SearchItemsData> {
  return fetch(`/api/items?q=${query}`)
    .then((res) => {
      if (res.status === 404) {
        throw new Error("Error buscando productos");
      }
      return res.json();
    })
    .catch((err) => {
      throw err;
    });
}
