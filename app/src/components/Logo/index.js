import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_ML.png";
import "./index.scss";

export default function Logo({ style }) {
  return (
    <div className="logo-container" style={style}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}
