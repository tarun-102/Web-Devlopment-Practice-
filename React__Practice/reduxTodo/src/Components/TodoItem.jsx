import React, { useState } from "react";
import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import {
  removeTodo,
  updateTodo,
  todoCompleted,
} from "../App/Todofeture/TodoSlice";
function TodoItem() {
  const { todos } = useSelector((state) => state.todos);
  const [istodoeditable, setIstodoeditable] = useState(false);
  const dispatch = useDispatch();
  const [editmsg, setEditmsg] = useState("");
  const deleteTodo = (id) => {
    dispatch(removeTodo(id));
  };
  const edittodo = (id, editmsg) => {
    dispatch(
      updateTodo({
        id,
        msg: editmsg,
      }),
    );
  };

  const toggleCompleted = (id) => {
    console.log("click" ,id)
        dispatch(todoCompleted(id))
  }
  
  return (
    <>
      {todos.map((todo) => (
        <div
          className="d-flex justify-content-center mt-5 align-items-center gap-2 w-100 "
          key={todo.id}
        >
          <div className="d-flex align-items-center justify-content-center gap-2 bg-dark todo-item rounded-3">
            <input
              className="form-check-input shadow-none"
              type="checkbox"
              style={{
                height: "25px",
                width: "25px",
                outline: "none",
              }}
               checked = {todo.completed}
               onChange={() => toggleCompleted(todo.id)}
            />
            <input
              className={`bg-secondary rounded-3 text-dark fs-3 ps-3 fw-bolder ${todo.completed ? "bg-success" :""} ${todo.completed ? "text-decoration-line-through": ""} `} 
              type="text"
              value={istodoeditable ? editmsg : todo.msg}
              onChange={(e) => setEditmsg(e.target.value)}
              readOnly={!istodoeditable}
              style={{ height: "60px", width: "600px", outline: "none" }}
            />

            <button
              className="btn btn-success fs-3"
              onClick={() => {
               
                if (istodoeditable) {
                  edittodo(todo.id, editmsg);
                  setIstodoeditable(false);
                } else {
                      setEditmsg(todo.msg);
                  setIstodoeditable((prew) => !prew);
                }
              }}
              disabled={todo.completed}
            >
              {istodoeditable ? "Save" : "Edit"}
            </button>
            <button
              className="btn btn-danger fs-3"
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default TodoItem;
