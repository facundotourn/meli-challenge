import React from "react";

import "./index.scss";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Button({ children, className = "" }: ButtonProps) {
  return <button className={`btn ${className}`}>{children}</button>;
}
