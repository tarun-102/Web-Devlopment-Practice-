import { useState } from "react";
import "./App.css";
import Cart from "./COmponents/Cart";
import useCart from "./hooks/useCart";
function App() {
  const [count, setCount] = useState(0);
  const {addcart} = useCart()

  const product = [
    {
      id: 1,
      name: "laptop",
      price: 120000,
      quntity: 1
    },

    {
      id: 2,
      name: "mobile",
      price: 25000,
      quntity: 1
    },

    {
      id: 3,
      name: "speakar",
      price: 10000,
      quntity: 1
    },

    {
      id: 4,
      name: "Apple Phone",
      price: 5000,
      quntity: 1
    },

    {
      id: 5,
      name: "laptop",
      price: 70000,
      quntity: 1
    },

    {
      id: 6,
      name: "Samsung S26 Ultra",
      price: 200000,
      quntity: 1
    },
  ];

  return (
    <>
      <div className="d-flex justify-content-center align-items-center gap-4 mb-4">
        {product.map((item) => (
          <div
            className="card d-flex d-inline-flex justify-content-center align-items-center  "
            key={item.id}
          >
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            <button 
              onClick={() => addcart(item )}
            className="btn btn-success">Add to Cart</button>
          </div>
        ))}
      </div>

     <h1 className="text-success text-center"> Your Cart</h1>
      <Cart />
    </>
  );
}

export default App;
