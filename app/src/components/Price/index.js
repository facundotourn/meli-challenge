import React from "react";
import { formatCurrency } from "../../util";

export default function Price({ amount, className }) {
  return <span className={className}>{formatCurrency(amount)}</span>;
}
