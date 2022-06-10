import React, { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard/ProductCard';

import Header from './components/Header/Header';
import './App.css';

function App() {
  //useStates

  const [items, setItems] = useState('');
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`);
      const data = await response.json();
      setItems(data);
    }
    fetchData();
  }, []);

  const isFavorite = (id) => {
    if (favorites.indexOf(id) !== -1) {
      return 'yes';
    } else {
      return 'no';
    }
  };

  return (
    <div data-testid="App">
      <Header />
      <div className="App">
        {/* <h1>E-commerce site</h1> */}
        <div className="items-container">
          {items &&
            items.map((item) => {
              const checkFavorite = isFavorite(item.id);
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  isFavorite={checkFavorite}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
