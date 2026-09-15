import { useTodo } from "../../context/TodoContext";
import AppButton from "../../components/AppButton";
import { toast } from "react-toastify";

const TodoList = () => {
  const { todos, dispatch } = useTodo();

  if (todos.length === 0) {
    return <p className="text-white">No tasks found. Add a new task!</p>;
  }

  return (
    <ul className="list-group" style={{ width: "400px" }}>
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="list-group-item bg-dark text-white d-flex justify-content-between align-items-center border-secondary mb-2 rounded"
        >
          <span>{todo.text}</span>
          <AppButton
            className="btn-danger btn-sm"
            onClick={() => {
              dispatch({ type: "DELETE_TODO", payload: todo.id });
              toast.error("Todo deleted!");
            }}
          >
            Delete
          </AppButton>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;