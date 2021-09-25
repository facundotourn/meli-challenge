import React from "react";
import logo from "../../assets/Logo_ML.png";
import "./index.scss";

export default function Logo({ style }) {
  return (
    <div className="logo-container" style={style}>
      <img src={logo} alt="logo" />
    </div>
  );
}
