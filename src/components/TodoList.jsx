import React from "react";
import { motion } from "framer-motion";
import { BsTrash, BsPencilSquare, BsCheckLg } from "react-icons/bs";

function TodoList(props) {
  const todosList = props.todos;

  return (
    <div className="todo-list">
      <div
        className={`todo-list__overlay ${
          props.editMode ? "" : "todo-list__overlay-off"
        }`}
      >
        &nbsp;
      </div>

      {todosList.map((todo, index) => {
        const isDisabled = todo?.complete == undefined ? false : todo.complete;

        return (
          <motion.div
            key={todo.id}
            className={`todo-list__item ${
              isDisabled ? "todo-list__item--complete" : ""
            }`}
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 10 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1.025 }}
          >
            <div className="todo-list__text">{todo.text}</div>
            <div className="todo-list__button-options">
              <button
                className="todo-list__button todo-list__button--complete"
                onClick={() => props.completeTodo(todo.id)}
              >
                <BsCheckLg />
                {isDisabled ? "Reabrir" : "Finalizar"}
              </button>
              <button
                className="todo-list__button todo-list__button--edit"
                onClick={() => props.updateTodo(todo.id)}
                disabled={isDisabled}
              >
                <BsPencilSquare />
                Editar
              </button>
              <button
                className="todo-list__button todo-list__button--delete"
                onClick={() => props.removeTodo(todo.id)}
              >
                <BsTrash />
                Apagar
              </button>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default TodoList;
