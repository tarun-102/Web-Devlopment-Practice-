import { useState, type FormEvent } from "react";
import { useTodo } from "../../context/TodoContext";
import AppButton from "../../components/AppButton";
import { toast } from "react-toastify";

const TodoForm = () => {
  const [text, setText] = useState("");
  const { dispatch } = useTodo();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;

    dispatch({ type: "ADD_TODO", payload: text });
    toast.success("Todo added successfully!");
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-2 mb-4" style={{ width: "400px" }}>
      <input
        type="text"
        className="form-control bg-secondary text-white border-0"
        placeholder="Enter new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <AppButton type="submit" className="btn-success">
        Add
      </AppButton>
    </form>
  );
};

export default TodoForm;