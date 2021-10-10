type GetItemData = {
  item: Product;
};

export async function getItem(id: string): Promise<GetItemData> {
  return fetch(`/api/items/${id}`)
    .then((res) => res.json())
    .catch((err) => console.error(err));
}
