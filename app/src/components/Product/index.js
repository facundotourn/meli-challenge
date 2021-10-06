import React from "react";
import Button from "../Button";
import Price from "../Price";

import "./index.scss";

export default function Product({ product }) {
  const {
    title,
    picture,
    price: { amount },
    description,
  } = product;

  return (
    <div className="product-detail">
      <div className="main">
        <div className="product-image">
          <img src={picture} alt="" />
        </div>
        <div className="product-info">
          <div>
            <p className="product-sales">Nuevo - 234 vendidos</p>
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
