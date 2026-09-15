import { configureStore } from "@reduxjs/toolkit";
import userReducers from "./slice/userSlice";

export const store = configureStore({
    reducer: {
        users: userReducers
    }
})
