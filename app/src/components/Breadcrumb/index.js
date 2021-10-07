import React from "react";
import "./index.scss";
import rightArrow from "../../assets/right-arrow-angle.png";

export default function Breadcrumb({ path = [], style }) {
  return (
    <div className="breadcrumb-container" style={style}>
      {path.map((categoria, index) => (
        <>
          <span>{categoria}</span>
          {index !== path.length - 1 && (
            <img src={rightArrow} height={10} alt={categoria} />
          )}
        </>
      ))}
    </div>
  );
}
