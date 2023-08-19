import TodoItem from "./TodoItem";
import React from "react";

const TodoList = ({ todos, toggleTodoComplete, removeTodo }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          removeTodo={removeTodo}
          toggleTodoComplete={toggleTodoComplete}
          key={todo.id}
          {...todo}
        />
      ))}
    </ul>
  );
};
export default TodoList;
