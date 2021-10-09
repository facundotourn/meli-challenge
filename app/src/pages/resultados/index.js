import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/Breadcrumb";
import ProductSummary from "../../components/ProductSummary";
import { searchItems } from "../../services/items";
import "./index.scss";

export default function ViewResultados({ location, history }) {
  const params = new URLSearchParams(location.search);
  const query = params.get("search");

  const [items, setItems] = useState([]);
  const [categoryPath, setCategoryPath] = useState([]);

  useEffect(() => {
    searchItems(query)
      .then((data) => {
        setItems(data.items);
        setCategoryPath(data.categories);
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
      <Helmet>
        <title>{query} - Meli challenge</title>
      </Helmet>
      <Breadcrumb path={categoryPath} />
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
