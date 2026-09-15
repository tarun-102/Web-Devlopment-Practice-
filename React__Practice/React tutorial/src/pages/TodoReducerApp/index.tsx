import { TodoProvider } from "../../context/TodoContext";
import TodoForm from "./odoForm";
import TodoList from "./TodoList";

const TodoReducerApp = () => {
  return (
    <TodoProvider>
      <div className="d-flex justify-content-center align-items-center flex-column mt-5">
        <h3 className="text-white mb-4">Todo App (useReducer & useContext)</h3>
        <TodoForm />
        <TodoList />
      </div>
    </TodoProvider>
  );
};

export default TodoReducerApp;