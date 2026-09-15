import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../store/slice/TdoSlice";

const InputForm = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <div className="form-container d-inline-block d-flex justify-content-center">
      <form
        onSubmit={handleFormSubmit}
        className="d-flex justify-content-center align-items-center gap-3 p-3 bg-dark rounded-3"
      >
        <input
          type="text"
          className="form-control"
          placeholder="Write Todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-success">
          Add
        </button>
      </form>
    </div>
  );
};

export default InputForm;