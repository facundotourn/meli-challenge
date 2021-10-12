import React from "react";
import "./index.scss";
import rightArrow from "../../assets/right-arrow-angle.png";

type BreadcrumbProps = {
  path: string[];
  style?: React.CSSProperties;
};

export default function Breadcrumb({ path = [], style = {} }: BreadcrumbProps) {
  return (
    <div className="breadcrumb-container" style={style}>
      {path.map((categoria, index) => (
        <div key={index}>
          <span>{categoria}</span>
          {index !== path.length - 1 && (
            <img src={rightArrow} alt={categoria} />
          )}
        </div>
      ))}
    </div>
  );
}
