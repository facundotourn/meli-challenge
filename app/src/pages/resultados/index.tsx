import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Breadcrumb from "../../components/Breadcrumb";
import ProductSummary from "../../components/ProductSummary";
import { useLoader } from "../../context/loader";
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
  const { setProgress } = useLoader();

  const [items, setItems] = useState<Product[] | undefined>(undefined);
  const [categoryPath, setCategoryPath] = useState<string[] | undefined>(
    undefined
  );

  useEffect(() => {
    setProgress && setProgress(60);

    searchItems(query)
      .then((data) => {
        setItems(data.items);
        setCategoryPath(data.categories);
      })
      .catch((err) => {
        console.error(err);
        history.push("/error");
      })
      .finally(() => {
        setProgress && setProgress(100);
      });
  }, [query, history, setProgress]);

  const handleProductClick = (id: string) => {
    setProgress && setProgress(40);
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
