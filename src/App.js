import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoContainer from "./components/TodoContainer"
import { useSelector } from "react-redux";

function App() {
  const data = useSelector((state) => state.todo);
  console.log(data);
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoContainer dat={data}/>
    </div>
  );
}

export default App;
