import React from "react";

import "./index.scss";

export default function Button({ children, className }) {
  return <button className={`btn ${className}`}>{children}</button>;
}
