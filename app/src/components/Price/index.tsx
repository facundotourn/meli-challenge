import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../util";

import "./index.scss";

type PriceProps = {
  amount: number;
  className: string;
  exponentialCents?: boolean;
};

export default function Price({
  amount,
  className,
  exponentialCents = false,
}: PriceProps) {
  const [formatted, setFormatted] = useState<React.ReactNode | undefined>(
    undefined
  );

  useEffect(() => {
    const price: string = formatCurrency(amount);

    if (exponentialCents) {
      const [entero, decimal] = price.split(",");

      setFormatted(
        <>
          <span className="integer-price">{entero}</span>
          <span className="decimal-price">{decimal}</span>
        </>
      );
    } else {
      setFormatted(<span className="integer-price">{price}</span>);
    }
  }, [amount, exponentialCents]);
  return <span className={className}>{formatted}</span>;
}
