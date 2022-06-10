import React from 'react';
import css from './header.module.css';

function Header() {
  return (
    <div data-testid="Header" className={css.header}>
      <h1 className={css.headerH}>Team 9's Shop</h1>
    </div>
  );
}

export default Header;
