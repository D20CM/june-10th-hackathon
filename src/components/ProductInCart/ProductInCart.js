import React from 'react';
import css from './productInCart.module.css';

function ProductInCart(product) {
  return (
    <div data-testid="ProductCard" className={css.productInCart}>
      <img className={css.image} src={product.image} alt={product.title} />
      <h4 className={css.title}>{product.title}</h4>
      <span className={css.price}>£{product.price}</span>
    </div>
  );
}

export default ProductInCart;
