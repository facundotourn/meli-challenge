import React from "react";
import "./index.scss";

import search from "../../assets/ic_Search.png";

interface SearchFormElements extends HTMLFormControlsCollection {
  inputBuscar: HTMLInputElement;
}

interface SearchForm extends HTMLFormElement {
  readonly elements: SearchFormElements;
}

type InputProps = {
  onSubmit: (e: React.FormEvent<SearchForm>) => void;
};

export default function Input({ onSubmit }: InputProps) {
  return (
    <form onSubmit={(e: React.FormEvent<SearchForm>) => onSubmit(e)}>
      <input
        type="text"
        placeholder="Nunca dejes de buscar"
        className="input-buscar"
        name="inputBuscar"
      />
      <button type="submit">
        <img src={search} alt="buscar" />
      </button>
    </form>
  );
}
