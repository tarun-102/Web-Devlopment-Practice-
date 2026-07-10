import { use, useContext, useState } from "react";
import CartContext from "./CartContext";

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  let total;

  const addcart = (product) => {
    setCart((prew) => {
      const existproduct = prew.find((item) => item.id === product.id);

      if (existproduct) {
        return prew.map((item) =>
          item.id === product.id
            ? { ...item, quntity: item.quntity + 1 }
            : item,
        );
      }

      return [...prew, product];
    });
  };
  const incress = (product) => {
   setCart((prew) => (
    prew.map((item) => item.id === product.id ? {...item, quntity: item.quntity + 1} : item)
   ))
  }

   const dicress = (product) => {
   setCart((prew) => (
    prew.map((item) => item.id === product.id ? {...item, quntity: item.quntity - 1} : item)
   ))
  }

    total = cart.reduce((sum, item) => {
    return sum + item.price * item.quntity;
  }, 0);

  return (
    <CartContext.Provider value={{ cart, addcart, total, incress,dicress }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
