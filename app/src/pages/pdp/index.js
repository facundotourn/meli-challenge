import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import Product from "../../components/Product";
import { getItem } from "../../services/item";
import "./index.scss";

export default function ViewPDP() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const [categoryPath, setCategoryPath] = useState([]);

  useEffect(() => {
    getItem(id)
      .then(({ item }) => {
        setItem(item);
        setCategoryPath(item.categories);
      })
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <>
      <Helmet>
        <title>{item.title ? `${item.title} - ` : ""}Meli challenge</title>
      </Helmet>
      {Object.keys(item).length && (
        <>
          <Breadcrumb path={categoryPath} />
          <Product product={item} />
        </>
      )}
    </>
  );
}
