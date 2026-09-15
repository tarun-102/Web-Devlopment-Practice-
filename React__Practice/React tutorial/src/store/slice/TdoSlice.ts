import { createSlice, nanoid,type PayloadAction } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  msg: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      const todo: Todo = {
        id: nanoid(),
        msg: action.payload,
        completed: false,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    updateTodo: (state, action: PayloadAction<{ id: string; msg: string }>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.msg = action.payload.msg;
      }
    },

    todoCompleted: (state, action: PayloadAction<string>) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },

    setTodos: (state) => {
      const savedTodos = localStorage.getItem("todos");
      if (savedTodos) {
        const parsed = JSON.parse(savedTodos);
        state.todos = parsed.todos || [];
      }
    },
  },
});

export const { addTodo, removeTodo, updateTodo, todoCompleted, setTodos } =
  todoSlice.actions;

export default todoSlice.reducer;