import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    //TODO: make function?
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodoList = [todo, ...todos];
    setTodos(newTodoList);
    console.log(newTodoList);
  }

  function removeTodo(id) {
    const todoList = todos;

    const newTodoList = todoList.filter((todo) => todo.id !== id);

    setTodos(newTodoList);
  }

  return (
    <div className="app">
      <TodoHeader onSubmit={addTodo} />
      <TodoList todos={todos} removeTodo={removeTodo} />
    </div>
  );
}

export default App;
