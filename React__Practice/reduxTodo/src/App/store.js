import {configureStore} from "@reduxjs/toolkit";
import  todoSlice  from "./Todofeture/TodoSlice";

export const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})

store.subscribe(() => {
    localStorage.setItem(
        "todos",
        JSON.stringify(store.getState().todos)
    );
});