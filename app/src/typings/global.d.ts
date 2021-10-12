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

interface SearchProduct {
  id: string;
  title: string;
  picture: string;
  price: Price;
  free_shipping: boolean;
  state: any;
}

interface Price {
  amount: number;
}
