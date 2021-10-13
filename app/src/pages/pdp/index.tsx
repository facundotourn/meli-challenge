import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router";
import Breadcrumb from "../../components/Breadcrumb";
import Product from "../../components/Product";
import { useLoader } from "../../context/loader";
import { getItem } from "../../services/item";
import "./index.scss";

type PagePDPProps = {
  history: any;
};

export default function PagePDP({ history }: PagePDPProps) {
  const { id } = useParams();
  const [item, setItem] = useState<Product | undefined>(undefined);
  const { setProgress } = useLoader();

  useEffect(() => {
    setProgress && setProgress(60);
    getItem(id)
      .then(({ item }) => {
        setItem(item);
      })
      .catch((err) => {
        history.push("/error");
      })
      .finally(() => {
        setProgress && setProgress(100);
      });
  }, [id, setProgress, history]);

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
