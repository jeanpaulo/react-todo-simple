import React from "react";
import { motion } from "framer-motion";

function TodoList(props) {
  const todosList = props.todos;

  return (
    <div className="todo-list">
      {todosList.map((todo, index) => (
        <motion.div
          key={todo.id}
          className="todo-list__item"
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ duration: 0.2 }}
          whileHover={{ scale: 1.025 }}
        >
          {todo.text}
        </motion.div>
      ))}
    </div>
  );
}

export default TodoList;
