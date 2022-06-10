import React, { useState, useEffect } from "react"
import "./App.css"

function App() {
  //useStates
  const [items, setItems] = useState("")

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      setItems(data)
    }
    fetchData()
  }, [])

  return <div className="App">{console.log(items)}</div>
}

export default App
