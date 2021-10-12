import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/Logo_ML.png";
import "./index.scss";

type LogoProps = {
  style?: React.CSSProperties;
};

export default function Logo({ style = {} }: LogoProps) {
  return (
    <div className="logo-container" style={style}>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
    </div>
  );
}
