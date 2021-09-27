import React from "react";
import "./index.scss";
import rightArrow from "../../assets/right-arrow-angle.png";

export default function Breadcrumb({ style }) {
  const categorias =
    "Electrónica, Audio y Video > iPod > Reproductores > iPod touch > 32 GB".split(
      " > "
    );

  return (
    <div className="breadcrumb-container" style={style}>
      {categorias.map((categoria, index) => (
        <>
          <span>{categoria}</span>
          {index !== categorias.length - 1 && (
            <img src={rightArrow} height={10} alt={categoria} />
          )}
        </>
      ))}
    </div>
  );
}
