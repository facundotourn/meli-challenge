export const formatCurrency = (amount: number): string => {
  let precio: string = amount % 1 ? amount.toFixed(2) : amount.toString();

  return `$ ${precio
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};
