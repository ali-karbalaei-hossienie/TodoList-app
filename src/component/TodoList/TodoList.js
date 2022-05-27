import "./TodoList.css";
import { BiTrash } from "react-icons/bi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import React, { Component, useState } from "react";

const TodoList = ({ Todos, onDelete, onComplete }) => {
  const handlerChange = (id) => {
    onComplete(id);
  };

  return (
    <div className="TodoList">
      {Todos.map((todo) => {
        return (
          <div className="Todo" key={todo.id}>
            <div className="TodoName">
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.isComplete}
                onChange={() => handlerChange(todo.id)}
                id={todo.id}
              />
              <label
                htmlFor={todo.id}
                className={`${todo.isComplete && "complete"}`}
              >
                {todo.text}
              </label>
              {/* <div className={`${todo.isComplete && "complete"}`}>
                {todo.text}
              </div> */}
            </div>
            <button onClick={() => onDelete(todo.id)} className="btn">
              <FontAwesomeIcon
                className="Icon"
                icon={faTrash}
              ></FontAwesomeIcon>
            </button>
          </div>
          // <div className="Todo">
          //   <div>
          //     <input type="checkbox" />
          //     <div>[h,h</div>
          //   </div>
          //   <button>click</button>
          // </div>
        );
      })}
    </div>
  );
};

export default TodoList;
