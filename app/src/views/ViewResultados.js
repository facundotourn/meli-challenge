import React, { useEffect, useState } from "react";
import { searchItems } from "../services/items";

export default function ViewResultados({ location }) {
  const params = new URLSearchParams(location.search);
  const query = params.get("search");

  const [items, setItems] = useState([]);

  useEffect(() => {
    searchItems(query).then(({ data }) => {
      setItems(data.items);
    });
  }, [query]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <img src={item.picture} alt={item.id} />
        </div>
      ))}
    </div>
  );
}
