type SearchItemsData = {
  items: SearchProduct[];
  categories: string[];
};

export async function searchItems(
  query: string | null
): Promise<SearchItemsData> {
  return fetch(`/api/items?q=${query}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
