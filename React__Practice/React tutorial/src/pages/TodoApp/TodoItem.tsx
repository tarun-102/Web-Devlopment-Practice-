import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  todoCompleted,
} from "../../store/slice/TdoSlice";
import type { RootState } from "../../store/store";

const TodoItem = () => {
  const { todos } = useSelector((state: RootState) => state.todos);
  const [isTodoEditable, setIsTodoEditable] = useState<string | null>(null); 
  const [editMsg, setEditMsg] = useState("");
  const dispatch = useDispatch();

  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };

  const handleEditTodo = (id: string, msg: string) => {
    dispatch(updateTodo({ id, msg }));
  };

  const handleToggleCompleted = (id: string) => {
    dispatch(todoCompleted(id));
  };

  return (
    <>
      {todos.map((todo) => {
        const isEditable = isTodoEditable === todo.id;

        return (
          <div
            className="d-flex justify-content-center mt-3 align-items-center gap-2 w-100"
            key={todo.id}
          >
            <div className="d-flex align-items-center justify-content-center gap-2 bg-dark todo-item rounded-3 p-2">
              <input
                className="form-check-input shadow-none"
                type="checkbox"
                style={{ height: "25px", width: "25px", outline: "none" }}
                checked={todo.completed}
                onChange={() => handleToggleCompleted(todo.id)}
              />
              <input
                className={`bg-secondary rounded-3 text-dark fs-3 ps-3 fw-bolder ${
                  todo.completed ? "bg-success" : ""
                } ${todo.completed ? "text-decoration-line-through" : ""}`}
                type="text"
                value={isEditable ? editMsg : todo.msg}
                onChange={(e) => setEditMsg(e.target.value)}
                readOnly={!isEditable}
                style={{ height: "60px", width: "500px", outline: "none" }}
              />

              <button
                className="btn btn-success fs-3"
                onClick={() => {
                  if (isEditable) {
                    if (editMsg.trim()) handleEditTodo(todo.id, editMsg);
                    setIsTodoEditable(null);
                  } else {
                    setIsTodoEditable(todo.id);
                    setEditMsg(todo.msg);
                  }
                }}
                disabled={todo.completed}
              >
                {isEditable ? "Save" : "Edit"}
              </button>

              <button
                className="btn btn-danger fs-3"
                onClick={() => handleDelete(todo.id)}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoItem;