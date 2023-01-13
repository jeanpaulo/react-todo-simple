import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

function TodoHeader(props) {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
    console.log("Modo edicao: ", props.editMode);
    console.log("Todo: ", props.todo);

    if (props.editMode) {
      inputRef.current.value = props.todo.text;
    }
  });

  function handleSubmit(e) {
    e.preventDefault();

    const todoToSave = {
      id: props.todo?.id || uuidv4(),
      text: inputRef.current.value,
    };

    props.onSubmit(todoToSave);
    inputRef.current.value = "";
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
          ref={inputRef}
          autoComplete="off"
        />
        {props.todo?.id == null ? (
          <button className="btn-save btn-save__add">Adicionar</button>
        ) : (
          <button className="btn-save btn-save__update">Atualizar</button>
        )}
      </form>
    </div>
  );
}

export default TodoHeader;
