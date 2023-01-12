import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoHeader(props) {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => setInput(e.target.value);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  function handleSubmit(e) {
    e.preventDefault();
    const newTodo = {
      id: uuidv4(),
      text: input,
    };

    props.onSubmit(newTodo);

    setInput("");
  }

  return (
    <div className="todo-header">
      <h1 className="todo-header__title">Simple to-do</h1>
      <form className="todo-header__form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input"
          name="todo-input"
          placeholder="Novo item"
          value={input}
          onChange={handleInputChange}
          ref={inputRef}
          autocomplete="off"
        />
        <button className="todo-add-button">Adicionar</button>
      </form>
    </div>
  );
}

export default TodoHeader;
