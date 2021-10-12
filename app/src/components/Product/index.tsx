import Button from "../Button";
import Price from "../Price";

import "./index.scss";

type ProductProps = { product: Product };

interface Dictionary {
  [key: string]: string;
}
const CONDITION_MAP: Dictionary = {
  new: "Nuevo",
  used: "Usado",
  not_specified: "",
};

export default function Product({ product }: ProductProps) {
  const {
    title,
    picture,
    price: { amount },
    description,
    soldQuantity,
    condition,
  } = product;

  return (
    <div className="product-detail">
      <div className="main">
        <div className="product-image">
          <img src={picture} alt="product" />
        </div>
        <div className="product-info">
          <div>
            <p className="product-sales">
              {CONDITION_MAP[condition] +
                (soldQuantity ? ` - ${soldQuantity} vendidos` : "")}
            </p>
            <p className="title">{title}</p>
          </div>
          <Price className="price" amount={amount} exponentialCents />
          <Button className="buy-button">{"Comprar"}</Button>
        </div>
      </div>
      {description && (
        <div className="description-wrapper">
          <div className="product-description">
            <p className="description-title">Descripción del producto</p>
            <p className="description-content">{description}</p>
          </div>
        </div>
      )}
    </div>
  );
}
