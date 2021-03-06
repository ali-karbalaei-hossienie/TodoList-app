import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FaEdit } from "react-icons/fa";

// import { BiPencil } from "react-icons/bi";

const TodoForm = ({ AddTodo }) => {
  const [input, setInput] = useState("");
  const InputHandler = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!input) {
      alert("جای خالی را پر نمایید");
      return;
    }
    AddTodo(input);
    setInput("");
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          value={input}
          onChange={InputHandler}
          type="text"
          placeholder="درخواست  خود را اضافه کنید"
        />
        <FaEdit className="submit" onClick={submitHandler} />
      </form>
    </div>
  );
};

export default TodoForm;
