import React from "react";
import css from "./productCard.module.css";

function ProductCard(product) {
  return (
    <div className={css.productCard}>
      <h2>{product.title}</h2>
      <span>{product.price}</span>
      <p>{product.description}</p>
      <img src={product.image} alt={product.title} />
      <span>Category: {product.category}</span>
    </div>
  );
}

export default ProductCard;
