import React from "react";
import Input from "../../components/Input";
import Logo from "../../components/Logo";
import "./index.scss";

export function ViewBusqueda() {
  return (
    <header>
      <div class="nav-bounds">
        <Logo style={{ marginRight: "30px" }} />
        <Input></Input>
        <div></div>
      </div>
    </header>
  );
}
