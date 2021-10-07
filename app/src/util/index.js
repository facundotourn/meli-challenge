export const formatCurrency = (amount) => {
  amount = amount % 1 ? amount.toFixed(2) : amount;

  return `$ ${amount
    .toString()
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
};
