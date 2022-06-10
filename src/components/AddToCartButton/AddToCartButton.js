import React from "react";
import css from "./addToCartButton.module.css";

function AddToCartButton(product) {
  function addProductToCart(product) {
    //do something here
  }
  return <button onClick={() => addProductToCart(product)}>Add To Cart</button>;
}

export default AddToCartButton;
