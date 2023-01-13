import { useState } from "react";
import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  function saveTodo(todo) {
    //TODO: make function?
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    if (editMode) {
      const updatedTodoList = todos.map((item) => {
        if (item.id == todo.id) {
          item.text = todo.text;
        }
        return item;
      });

      setTodos(updatedTodoList);
      setCurrentTodo(null);
      setEditMode(false);
      return;
    }

    const newTodoList = [todo, ...todos];
    setTodos(newTodoList);
    // console.log(newTodoList);
  }

  function removeTodo(id) {
    // const todoList = todos;

    const newTodoList = todos.filter((todo) => todo.id !== id);

    setTodos(newTodoList);
  }

  function updateTodo(id) {
    // console.log(id);
    setEditMode(true);

    const todoToEdit = todos.find((item) => item.id === id);
    setCurrentTodo(todoToEdit);
    // console.log(todoToEdit);
  }

  function completeTodo(id) {
    const updatedTodoList = todos.map((item) => {
      if (item.id == id) {
        if (item?.complete === undefined) {
          item.complete = true;
          return item;
        }

        item.complete = !item.complete;
      }
      return item;
    });
    setTodos(updatedTodoList);
  }

  return (
    <div className="app">
      <TodoHeader onSubmit={saveTodo} todo={currentTodo} editMode={editMode} />
      <TodoList
        todos={todos}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
        editMode={editMode}
        completeTodo={completeTodo}
      />
    </div>
  );
}

export default App;
