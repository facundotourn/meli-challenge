import React from "react";
import "./index.scss";

import search from "../../assets/ic_Search.png";

export default function Input({ onSubmit }) {
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className="input-buscar"
      />
      <button type="submit">
        <img src={search} alt="buscar" />
      </button>
    </form>
  );
}
