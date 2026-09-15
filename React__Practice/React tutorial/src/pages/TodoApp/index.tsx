import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setTodos } from "../../store/slice/TdoSlice";
import InputForm from "./InputForm";
import TodoItem from "./TodoItem";

const TodoApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setTodos());
  }, [dispatch]);

  return (
    <div className="todo-container bg-black text-white">
      <h1 className="text-center pt-3">Todo List App</h1>
      <InputForm />
      <TodoItem />
    </div>
  );
};

export default TodoApp;