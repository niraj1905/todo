import React, { useState } from "react";
import { deleteItem } from "../redux/slice/todoSlice";
import { useDispatch } from "react-redux";

const TodoItem = (props) => {
  const [isActive, setIsActive] = useState(false);
  const dispatch = useDispatch();

  function complete() {
    setIsActive(true);
  }

  return (
    <div className="todo-item">
      <p className={isActive ? "completed-tast" : ""}>{props.data}</p>
      <div>
        <button className={isActive ? "btn-hide" : ""} onClick={complete}>
          Compelete
        </button>
        <button
          onClick={() => {
            dispatch(deleteItem(props.index));
            setIsActive(false);
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
