import React, { useMemo, useState } from 'react'
import './App.css'
import Register from './components/Register';
import Counter from './components/Counter';
import Reducer from './components/Reducer';
type Product = {
  id:number,
  name: string,
  price: number
}

function App() {

  const [search,setSearch] = useState<string>("");

  const product: Product[] = [
    {
       id: 1,
      name: "iPhone 15",
      price: 50000,
    },
     {
      id: 2,
      name: "Samsung S25",
      price: 60000,
    },

     {
      id: 3,
      name: "HP Laptop",
      price: 70000,
    },

    {
      id: 4,
      name: "Dell Laptop",
      price: 65000,
    },
  ]

  const filterProduct = useMemo(() => {
    console.log("filterring product...")

    return product.filter((item: Product) => item.name.toLocaleLowerCase().includes(search.toLowerCase())  )
  },[search])
  return (
    <>
      <div>
        <input type="search" 
          placeholder='search product...'
          value={search}
          onChange={((e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value) )}
        />

        <h2>Product</h2>
          {filterProduct.map((product) => (
            <div key={product.id}>
               <h3>{product.name}</h3>
          <p>₹{product.price}</p>
            </div>
          ))}
      </div>

      <Counter />
      <Reducer />
      <Register />
    </>
  )
}

export default App
