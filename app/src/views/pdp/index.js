import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getItem } from "../../services/item";
import "./index.scss";

export default function ViewPDP() {
  const { id } = useParams();
  const [item, setItem] = useState({});

  console.log(id);
  useEffect(() => {
    getItem(id).then((data) => setItem(data.item));
  }, [id]);

  return (
    <div>
      <h1>PDP</h1>
      <h1>{item.title}</h1>
    </div>
  );
}
