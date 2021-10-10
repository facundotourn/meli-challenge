interface Product {
  id: string;
  title: string;
  picture: string;
  price: Price;
  description: string;
  soldQuantity: number;
  condition: string;
  free_shipping: boolean;
  state: any;
  categories: string[];
}

interface Price {
  amount: number;
}
