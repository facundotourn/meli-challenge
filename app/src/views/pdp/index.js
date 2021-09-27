import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import Product from "../../components/Product";
import { getItem } from "../../services/item";
import "./index.scss";

export default function ViewPDP() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  console.log(id);
  useEffect(() => {
    getItem(id)
      .then((data) => setItem(data.item))
      .catch((err) => console.error(err));
  }, [id]);

  if (!Object.keys(item).length) {
    return null;
  }

  return (
    <>
      <Breadcrumb />
      <Product product={item} />
    </>
  );
}
