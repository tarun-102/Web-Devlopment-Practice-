import React, { createContext, useContext, useReducer, useEffect, type ReactNode } from "react";

export interface Todo {
  id: number;
  text: string;
}

type Action =
  | { type: "ADD_TODO"; payload: string }
  | { type: "DELETE_TODO"; payload: number }
  | { type: "SET_TODOS"; payload: Todo[] };

interface TodoContextType {
  todos: Todo[];
  dispatch: React.Dispatch<Action>;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const todoReducer = (state: Todo[], action: Action): Todo[] => {
  switch (action.type) {
    case "SET_TODOS":
      return action.payload;
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    case "DELETE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
};

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, dispatch] = useReducer(todoReducer, [], () => {
    const localData = localStorage.getItem("contextTodos");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("contextTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodo = () => {
  const context = useContext(TodoContext);
  if (!context) {
    throw new Error("useTodo must be used within a TodoProvider");
  }
  return context;
};