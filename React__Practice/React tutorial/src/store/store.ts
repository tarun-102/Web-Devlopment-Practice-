import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/TdoSlice"
import userReducer from "./slice/userSlice"
import  showFormReducer  from "./slice/showFormSlice";
export const store =configureStore({
    reducer : { 
        todos: todoReducer,
        users: userReducer,
    showForm: showFormReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {
  localStorage.setItem("todos", JSON.stringify(store.getState().todos));
});