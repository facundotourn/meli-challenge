type GetItemData = {
  item: Product;
};

export async function getItem(id: string): Promise<GetItemData> {
  return fetch(`/api/items/${id}`).then((res) => {
    if (res.status === 404) {
      throw new Error("Error buscando producto");
    }
    return res.json();
  });
}
