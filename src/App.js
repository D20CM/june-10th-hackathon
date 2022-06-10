import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard/ProductCard';
import ShoppingCart from './components/ShoppingCart/ShoppingCart';
import './App.css';

function App() {
  //useStates
  const [items, setItems] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      {/* <h1>E-commerce site</h1> */}
      <div className="items-container">
        {items &&
          items.map((item) => {
            return <ProductCard key={item.id} product={item} />;
          })}
      </div>
      {/* <div className="shopping-cart">
        <ShoppingCart />
      </div> */}
    </div>
  );
}

export default App;
