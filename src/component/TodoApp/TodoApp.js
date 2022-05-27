import React, { Component, useState, useEffect } from "react";
import TodoFooter from "../TodoFooter/TodoFooter";
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoMain from "../TodoMain/TodoMain";

import "./TodoApp.css";
const TodoApp = () => {
  const [Todos, setTodos] = useState([]);
  const AddTodoHandler = (input) => {
    const newTodo = {
      text: input,
      id: Math.floor(Math.random() * 1000),
      isComplete: false,
    };
    setTodos([...Todos, newTodo]);
  };

  useEffect(() => {
    let saveTodos = JSON.parse(localStorage.getItem("Todos"));
    if (saveTodos && saveTodos.length !== 0) {
      setTodos(saveTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos));
  }, [Todos]);

  const DeleteHandler = (id) => {
    const filterTodos = Todos.filter((Todo) => Todo.id !== id);
    setTodos(filterTodos);
  };

  const completeHandler = (id) => {
    const index = Todos.findIndex((todo) => todo.id === id);
    const selectTodo = { ...Todos[index] };
    selectTodo.isComplete = !selectTodo.isComplete;
    const AllTodos = [...Todos];
    AllTodos[index] = selectTodo;
    setTodos(AllTodos);
  };

  return (
    <div className="container">
      <TodoHeader />
      <TodoMain
        Todos={Todos}
        onDelete={DeleteHandler}
        onComplete={completeHandler}
        AddTodo={AddTodoHandler}
      />
      <TodoFooter Todos={Todos} />
    </div>
  );
};

export default TodoApp;
