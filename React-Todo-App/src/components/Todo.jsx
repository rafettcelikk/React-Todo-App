import React, { useState } from "react";
import { IoRemoveCircleSharp } from "react-icons/io5";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import "../App.css";

function Todo({ todo, onRemoveTodo, onUpdateTodo }) {
  const { id, content } = todo;

  const [edittable, setEditTable] = useState(false);
  const [newTodo, setNewTodo] = useState(content);

  const removeTodo = () => {
    onRemoveTodo(id);
  };

  const updateTodo = () => {
    const request = {
      id: id,
      content: newTodo,
    };
    onUpdateTodo(request);
    setEditTable(false);
  };

  return (
    <div className="todo">
      <div>
        {edittable ? (
          <input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            className="todo-input"
            type="text"
          />
        ) : (
          content
        )}
      </div>
      <div>
        <IoRemoveCircleSharp className="todo-icons" onClick={removeTodo} />
        {edittable ? (
          <FaCheck className="todo-icons" onClick={updateTodo} />
        ) : (
          <FaEdit className="todo-icons" onClick={() => setEditTable(true)} />
        )}
      </div>
    </div>
  );
}

export default Todo;
