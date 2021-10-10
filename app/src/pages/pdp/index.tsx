import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import Product from "../../components/Product";
import { useLoader } from "../../context/loader";
import { getItem } from "../../services/item";
import "./index.scss";

export default function PagePDP() {
  const { id } = useParams();
  const [item, setItem] = useState<Product | undefined>(undefined);
  const { setProgress } = useLoader();

  useEffect(() => {
    setProgress && setProgress(60);
    getItem(id)
      .then(({ item }) => {
        setProgress && setProgress(100);
        setItem(item);
      })
      .catch((err) => console.error(err));
  }, [id, setProgress]);

  return (
    <>
      <Helmet>
        <title>{item ? `${item.title} - ` : ""}Meli challenge</title>
      </Helmet>
      {item && (
        <>
          <Breadcrumb path={item.categories} />
          <Product product={item} />
        </>
      )}
    </>
  );
}
