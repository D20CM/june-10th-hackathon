import React, { useEffect } from "react"
import "./App.css"

function App() {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`https://fakestoreapi.com/products`)
      const data = await response.json()
      console.log(data)
    }
    fetchData()
  }, [])

  return <div className="App"></div>
}

export default App
