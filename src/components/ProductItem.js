import React from "react";

export default function ProductItem({ image, name, price }) {
  return (
    <div className="product-item">
      <div className="product-image">
        <img alt="" src={image} />
      </div>
      <p className="heading">{name}</p>
      <p className="sub-heading">${price}</p>
    </div>
  );
}
