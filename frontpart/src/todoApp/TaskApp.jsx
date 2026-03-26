import React, { useRef, useState } from "react";
import TodoTitle from "./components/TodoTitle";
import TodoInput from "./components/TodoInput";
import TodoListParent from "./components/todoList/TodoListParent";
import "./TaskApp.css"
import SearchTodo from "./components/SearchTodo";
import axios from "axios";

const TaskApp = () => {
  const inputRef = useRef(null);
  const [error, setError] = useState(null);

  const createTask = async (inputTask) => {
    if (!inputTask || !inputTask.trim()) return;

    const token = localStorage.getItem("token");
    if (!token) {
      setError("No auth token. Please login first.");
      return;
    }

    try {
      await axios.post(
        "http://localhost:4000/tasks",
        { inputTask: inputTask.trim() },
        { headers: { authorization: `Bearer ${token}` } }
      );
      setError(null);
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Failed to create task");
      console.error("Task create error:", err);
    }
  };

  return (
    <div id="app-div">
      <TodoTitle />
      <TodoInput inputRef={inputRef} onCreateTask={createTask} />
      {error && <div className="task-error">{error}</div>}
      <SearchTodo />
      <TodoListParent inputRef={inputRef} />
    </div>
  );
};

export default TaskApp;
