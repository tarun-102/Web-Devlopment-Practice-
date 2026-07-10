import React, { useState } from "react";
import { useTodo } from "../COntext";

function Todoitem({ todo }) {
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const [isTodoEditable, setISTodoEditable] = useState(false);
  const [todomsg, setTodomsg] = useState(todo.todo);

  const editTodo = () => {
    updateTodo(todo.id, { ...todo, todo: todomsg });
    setISTodoEditable(false);
  };

  const toggleComplete = () => {
    toggleCompleted(todo.id);
  };

  return (
    <div
      className="d-flex align-items-center gap-3 border rounded-3 p-2 shadow-sm"
      style={{
        backgroundColor: todo.completed ? "#c6e9a7" : "#ccbed7",
      }}
    >
      <input
        type="checkbox"
        className="form-check-input m-0"
        checked={todo.completed}
        onChange={toggleComplete}
      />

      <input
        type="text"
        className={`form-control bg-transparent ${
          isTodoEditable ? "border border-dark" : "border-0"
        } ${todo.completed ? "text-decoration-line-through" : ""}`}
        value={todomsg}
        onChange={(e) => setTodomsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      <button
        className="btn btn-secondary"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else {
            setISTodoEditable((prev) => !prev);
          }
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      <button
        className="btn btn-danger"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default Todoitem;