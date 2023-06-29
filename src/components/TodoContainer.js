import React from "react";
import TodoItem from "./TodoItem";

const TodoContainer = (props) => {
  return (
    <div className="todo-container">
      {props.dat.map((res, i) => (
        <TodoItem key={i} data={res} index={i} />
      ))}
    </div>
  );
};

export default TodoContainer;
