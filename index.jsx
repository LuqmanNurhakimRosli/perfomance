import React from "react"
import ReactDOM from "react-dom/client"
// import ProductsList from "./ProductsList"

function App() {

  const ProductList = React.lazy(() => { return import("./ProductsList")})

  const [count, setCount] = React.useState(0)
  const [showProducts, setShowProducts] = React.useState(false)

  function increment() {
    setCount(prevCount => prevCount + 1)
  }

  function decrement() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <>
      <h1>The current count is {count}</h1>
      <button className="button" onClick={decrement}>
        -
            </button>
      <button className="button" onClick={increment}>
        +
            </button>
      <br />
      <br />
      <button
        className="button"
        onClick={() => setShowProducts(prev => !prev)}
      >
        Show Products
            </button>
      <br />
      <br />

      <React.Suspense fallback={<h1>Loading...</h1>}>
        <div className="products-list">
          {showProducts && <ProductList />}
        </div>
      </React.Suspense>
    </>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
