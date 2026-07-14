import {configureStore} from "@reduxjs/toolkit"
import productsReducers from "../fetures/products/productSlice";
import paginationReducer from "../fetures/pagination/paginationSlice"
export const store = configureStore({
    reducer: {
        products: productsReducers,
        pagination: paginationReducer
    },
})