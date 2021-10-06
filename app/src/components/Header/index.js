import React from "react";
import { useHistory } from "react-router";
import Input from "../Input";
import Logo from "../Logo";
import "./index.scss";

export default function Header() {
  const history = useHistory();

  const handleBusqueda = (e) => {
    e.preventDefault();
    const query = e.target["0"].value;

    if (!query.length) return;

    history.push(`/items?search=${query}`);
  };

  return (
    <header>
      <div className="nav-bounds">
        <Logo style={{ marginRight: "30px" }} />
        <Input onSubmit={handleBusqueda}></Input>
        <div></div>
      </div>
    </header>
  );
}
