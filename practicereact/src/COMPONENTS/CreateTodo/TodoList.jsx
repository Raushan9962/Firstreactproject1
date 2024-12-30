import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './todoList.css';

export default function TodoList() {
  const [Todos, SetTodos] = useState([{ task: "sample Task", id: uuidv4() }]);
  const [NewTodo, SetNewTodo] = useState("");

  const addNewTask = () => {
    if (NewTodo.trim() !== "") {
      SetTodos([...Todos, { task: NewTodo, id: uuidv4() }]);
      SetNewTodo("");
    }
  };

  const updateTodoValue = (event) => {
    SetNewTodo(event.target.value);
  };

  return (
    <div className="container">
      <input
        placeholder="Add a task"
        value={NewTodo}
        onChange={updateTodoValue}
      />
      <br />
      <button onClick={addNewTask}>Add Task</button>
      <br />
      <br />
      <br />

      <h4>Tasks to do</h4>

      <ul>
        {Todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}
