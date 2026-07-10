import { useContext } from "react";
import CartContext from "../COntext/CartContext";
const useCart = () => {
    return useContext(CartContext)
}

export default useCart;