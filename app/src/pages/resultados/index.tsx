import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/Breadcrumb";
import ProductSummary from "../../components/ProductSummary";
import { searchItems } from "../../services/items";
import "./index.scss";

type PageResultadosProps = {
  location: any;
  history: any;
};

export default function PageResultados({
  location,
  history,
}: PageResultadosProps) {
  const params = new URLSearchParams(location.search);
  const query: string | null = params.get("search");

  const [items, setItems] = useState<Product[] | undefined>(undefined);
  const [categoryPath, setCategoryPath] = useState<string[] | undefined>(
    undefined
  );

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

  const handleProductClick = (id: string) => {
    history.push(`/items/${id}`);
  };

  return (
    <>
      <Helmet>
        <title>{query} - Meli challenge</title>
      </Helmet>
      {categoryPath && <Breadcrumb path={categoryPath} />}
      <div className="items-container">
        {items &&
          items.map((item) => (
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
