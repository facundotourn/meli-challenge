import React, { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import ProductSummary from "../../components/ProductSummary";
import { searchItems } from "../../services/items";
import "./index.scss";

export default function ViewResultados({ location, history }) {
  const params = new URLSearchParams(location.search);
  const query = params.get("search");

  const [items, setItems] = useState([]);

  useEffect(() => {
    searchItems(query).then((data) => {
      setItems(data.items);
    });
  }, [query]);

  const handleProductClick = (id) => {
    history.push(`/items/${id}`);
  };

  return (
    <>
      <Breadcrumb />
      <div className="items-container">
        {items.map((item) => (
          <ProductSummary
            key={item.id}
            item={item}
            onProductClick={handleProductClick}
          />
        ))}
      </div>
    </>
  );
}
