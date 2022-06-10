import React, { useState, useEffect } from "react"
import ProductCard from "./components/ProductCard/ProductCard"
import ShoppingCart from "./components/ShoppingCart/ShoppingCart"
import Header from "./components/Header/Header"
import "./App.css"

function App() {
  //useStates
  const [items, setItems] = useState("")
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      setItems(data)
    }
    fetchData()
  }, [])

  const isFavorite = (id) => {
    if (favorites.indexOf(id) !== -1) {
      return "yes"
    } else {
      return "no"
    }
  }

  // function updateFavorites(id) {
  //   if (isFavorite === "no") {
  //     setFavorites(...favorites, id);
  //   } else {
  //     let index = favorites.indexOf(id);
  //     setFavorites(...favorites.slice(0, index), favorites.slice(index));
  //   }
  // }

  return (
    <>
      <Header />
      <div className="App">
        {/* <h1>E-commerce site</h1> */}
        <div className="items-container">
          {items &&
            items.map((item) => {
              const checkFavorite = isFavorite(item.id)
              return (
                <ProductCard
                  key={item.id}
                  product={item}
                  isFavorite={checkFavorite}
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              )
            })}
        </div>
        {/* <div className="shopping-cart">
        <ShoppingCart />
      </div> */}
      </div>
    </>
  )
}

export default App
