import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/slice/todoSlice";

const TodoForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  return (
    <div className="todoform">
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task..."
      />
      <button
        onClick={() => {
          dispatch(addItem(task));
          setTask("");
        }}
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
