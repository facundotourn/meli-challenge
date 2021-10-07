import React from "react";
import Button from "../Button";
import Price from "../Price";

import "./index.scss";

const CONDITION_MAP = {
  new: "Nuevo",
  used: "Usado",
  not_specified: "",
};

export default function Product({ product }) {
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
          <img src={picture} alt="" />
        </div>
        <div className="product-info">
          <div>
            <p className="product-sales">
              {CONDITION_MAP[condition] +
                (soldQuantity ? ` - ${soldQuantity} vendidos` : "")}
            </p>
            <p className="title">{title}</p>
          </div>
          <Price className="price" amount={amount} />
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
