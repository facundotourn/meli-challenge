import React from "react";
import "./index.scss";
import imgFreeShipping from "../../assets/ic_shipping@2x.png.png.png";
import Price from "../Price";

export default function ProductSummary({ item, onProductClick }) {
  const {
    id,
    price: { amount },
    title,
    free_shipping,
    state,
  } = item;

  return (
    <div className="product-summary" onClick={() => onProductClick(id)}>
      <img className="img-product-summary" src={item.picture} alt={item.id} />
      <div className="product-summary-details">
        <div className="details-main-column">
          <div className="product-price-container">
            <Price className="p-price" amount={amount} />
            <div className="free-shipping-container">
              {free_shipping && (
                <img src={imgFreeShipping} alt="free shipping" height={25} />
              )}
            </div>
          </div>
          <p className="p-title">{title}</p>
        </div>
        <div className="details-location-column">
          <span>{state}</span>
        </div>
      </div>
    </div>
  );
}
