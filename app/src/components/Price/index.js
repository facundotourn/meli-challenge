import React, { useEffect, useState } from "react";
import { formatCurrency } from "../../util";

import "./index.scss"

export default function Price({ amount, className, exponentialCents }) {

  const [formatted, setFormatted] = useState("")

  useEffect(() => {
    const price = formatCurrency(amount)
    
    if (exponentialCents) {
      const parts = price.split(",")

      setFormatted(<>
          <span className="integer-price">{parts[0]}</span>
          <span className="decimal-price">{parts[1]}</span>
        </>)
    } else {
      setFormatted(<span className="integer-price">{price}</span>)
    }
  }, [amount, exponentialCents])
  return <span className={className}>{formatted}</span>;
}
