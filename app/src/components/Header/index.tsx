import React from "react";
import { useHistory } from "react-router";
import { useLoader } from "../../context/loader";
import Input from "../Input";
import Logo from "../Logo";
import "./index.scss";

export default function Header() {
  const history = useHistory();
  const { setProgress } = useLoader();

  const handleBusqueda = (e: any) => {
    e.preventDefault();
    const query: string = e.target["0"].value;

    if (!query.length) return;

    setProgress && setProgress(40);
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
