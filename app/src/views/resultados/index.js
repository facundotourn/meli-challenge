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
    const storedSearch = JSON.parse(
      localStorage.getItem("product_search") || "{}"
    );

    if (typeof storedSearch[query] !== "undefined") {
      setItems(storedSearch[query]);
      return;
    }

    searchItems(query)
      .then((data) => {
        let storedSearch = JSON.parse(
          localStorage.getItem("product_search") || "{}"
        );

        localStorage.setItem(
          "product_search",
          JSON.stringify({ ...storedSearch, [query]: data.items })
        );
        setItems(data.items);
      })
      .catch((err) => {
        console.error(err);
        history.push("/");
      });
  }, [query, history]);

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
