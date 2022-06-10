import React from "react";
import { useState } from "react";
import css from "./productCard.module.css";
import Favorite from "../../favorite.svg";

function ProductCard({ product, isFavorite, favorites, updateFavorites }) {
  const hollowHeart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-heart"
      wi
      dt
      h="36"
      height="36"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#e31c47"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );

  const filledHeart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon icon-tabler icon-tabler-heart"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#e31c47"
      fill="#e31c47"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );

  console.log(isFavorite);
  return (
    <div className={css.productCard}>
      <div className={css.imageContainer}>
        <img className={css.image} src={product.image} alt={product.title} />
      </div>
      <div className={css.priceContainer}>
        <span className={css.price}>£{product.price}</span>
        <div onClick={updateFavorites(product.id)}>
          {isFavorite === "yes" ? filledHeart : hollowHeart}
        </div>
      </div>

      <h2 className={css.productTitle}>{product.title}</h2>
      <p className={css.category}>Category: {product.category}</p>
      <p className={css.description}>{product.description}</p>
    </div>
  );
}

export default ProductCard;
