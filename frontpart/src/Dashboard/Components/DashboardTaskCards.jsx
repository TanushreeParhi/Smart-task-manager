// src/components/TaskCard.jsx
import React from "react";

const DashboardTaskCards = ({ task, onDelete }) => {
  return (
    <div className="task-card">
      <div>
        <h3>{task.inputTask || task.title || "Untitled Task"}</h3>
        <p className={task.status?.toLowerCase() === "completed" ? "done" : "pending"}>
          {task.status || "pending"}
        </p>
      </div>

      <div className="task-actions">
        <button className="edit">Edit</button>
        <button className="delete" onClick={() => onDelete(task._id || task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default DashboardTaskCards;