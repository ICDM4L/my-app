import React, { useState } from "react";
import "../App.css";

export default function TodosPage() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = (e) => {
    e.preventDefault();
    if (!newTodo.trim()) return;
    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo("");
  };

  const toggleComplete = (index) => {
    const updated = [...todos];
    updated[index].completed = !updated[index].completed;
    setTodos(updated);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") return todo.completed;
    if (filter === "incomplete") return !todo.completed;
    return true;
  });

  return (
    <div className="page-container">
      <h1>Todo List</h1>

      {/* Input and Add button side-by-side */}
      <form className="todo-form" onSubmit={addTodo}>
        <input
          type="text"
          placeholder="Enter a task"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      {/* Filter buttons */}
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
        <button onClick={() => setFilter("incomplete")}>Incomplete</button>
      </div>

      {/* Todo list */}
      <ul className="todo-list">
        {filteredTodos.map((todo, index) => (
          <li key={index} className={todo.completed ? "completed" : ""}>
            {todo.text}
            <div>
              <button onClick={() => toggleComplete(index)}>
                {todo.completed ? "Undo" : "Complete"}
              </button>
              <button onClick={() => removeTodo(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}