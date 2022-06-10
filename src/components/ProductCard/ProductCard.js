import React from "react";
import { useState } from "react";
import css from "./productCard.module.css";
import Favorite from "../../favorite.svg";
import AddToCartButton from "../AddToCartButton/AddToCartButton";

function ProductCard({
  product,
  isFavorite,
  setFavorites,
  favorites,
  updateFavorites,
}) {
  console.log(favorites);
  const hollowHeart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#e31c47"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );

  const filledHeart = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="36"
      height="36"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="#e31c47"
      fill="#e31c47"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M19.5 13.572l-7.5 7.428l-7.5 -7.428m0 0a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
    </svg>
  );

  const updateHeart = () => {
    if (isFavorite === "no") {
      setFavorites([...favorites, product.id]);
    } else {
      let index = favorites.indexOf(product.id);
      setFavorites([
        ...favorites.slice(0, index),
        ...favorites.slice(index + 1),
      ]);
    }
  };

  return (
    <div className={css.productCard}>
      <div className={css.imageContainer}>
        <img className={css.image} src={product.image} alt={product.title} />
      </div>
      <div className={css.priceContainer}>
        <span className={css.price}>£{product.price.toFixed(2)}</span>
        <div onClick={updateHeart}>
          {isFavorite === "yes" ? filledHeart : hollowHeart}
        </div>
      </div>

      <h2 className={css.productTitle}>{product.title}</h2>
      <p className={css.category}>Category: {product.category}</p>
      <div className={css.container}>
        <p className={css.description}>{product.description}</p>
      </div>
      <AddToCartButton />
    </div>
  );
}

export default ProductCard;
