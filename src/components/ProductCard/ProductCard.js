import React from "react";
import css from "./productCard.module.css";

function ProductCard({ product }) {
  return (
    <div className={css.productCard}>
      <h2 className={css.productTitle}>{product.title}</h2>
      <span className={css.price}>{product.price}</span>
      <p className={css.description}>{product.description}</p>
      <img className={css.image} src={product.image} alt={product.title} />
      <span className={css.category}>Category: {product.category}</span>
    </div>
  );
}

export default ProductCard;
