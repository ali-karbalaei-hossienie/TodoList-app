import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoList from "../TodoList/TodoList";
import TodoFooter from "../TodoFooter/TodoFooter";

import "./TodoMain.css";

const TodoMain = ({ Todos, onDelete, onComplete,AddTodo }) => {
  return (
    <div className="TodoMain">
      <TodoForm AddTodo={AddTodo} />
      <TodoList Todos={Todos} onDelete={onDelete} onComplete={onComplete} />
    </div>
  );
};

export default TodoMain;
