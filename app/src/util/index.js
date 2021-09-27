export const formatCurrency = (amount) => {
  return `$ ${amount
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};
