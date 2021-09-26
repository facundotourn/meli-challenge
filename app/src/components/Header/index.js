import React from "react";
import { useHistory } from "react-router";
import { searchItems } from "../../services/items";
import Input from "../Input";
import Logo from "../Logo";
import "./index.scss";

export default function Header() {
  const history = useHistory();

  const handleBusqueda = (e) => {
    e.preventDefault();
    const query = e.target["0"].value;

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
