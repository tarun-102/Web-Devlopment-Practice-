import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,

  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        msg: action.payload,
        completed: false
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.msg = action.payload.msg;
      }
    },
    todoCompleted: (state,action) => {
        const todo = state.todos.find((todo) => todo.id === action.payload)
        if(todo){
            todo.completed = !todo.completed
        }
    },
    setTodos: (state) =>{
        const todo = JSON.parse(localStorage.getItem("todos"))
       if(todo) {
        state.todos = todo.todos || []
       }
    }


  }
    
});

export const { addTodo, removeTodo, updateTodo ,todoCompleted,setTodos} = todoSlice.actions;

export default todoSlice.reducer;
