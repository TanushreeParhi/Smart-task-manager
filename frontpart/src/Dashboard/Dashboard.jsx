import React, { useEffect, useState } from 'react'
import '../landing_page_bg_design/Dashboard.css'
import DashboardNavbar from './Components/DashboardNavbar';
import StatsCard from './Components/StatsCard';
import DashboardTaskCards from './Components/DashboardTaskCards';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import searchIcon from "../todoApp/images/search-icon.png"
import { useDispatch } from 'react-redux'
import { searchTodo } from '../todoApp/redux/TodoSlice'


const Dashboard = () => {
  const taskNavigate = useNavigate();
  function navigateForCreateTask(){
    taskNavigate("/tasks")
  }
 
  // task list state and data loading
  const [tasks, setTasks] = useState([]);
  const token = localStorage.getItem("token");

  const loadTasks = async () => {
    if (!token) return;

    try {
      const res = await axios.get("http://localhost:4000/tasks", {
        headers: { authorization: `Bearer ${token}` },
      });
      console.log("dashboard res",res);
      
      setTasks(res.data || []);
    } catch (error) {
      console.error("Error loading dashboard tasks:", error.response?.data || error.message);
      setTasks([]);
    }
  };

  React.useEffect(() => {
    loadTasks();
  }, []);

 
 
 const deleteTask = (id) => {
    setTasks(tasks.filter(task => (task._id || task.id) !== id));
  };

  return (
    <div className="dashboard">
      <DashboardNavbar />

      {/* Hero Section */}
      <div className="hero">
        <h2>Welcome back 👋</h2>
        <p>Manage your tasks efficiently</p>
      </div>

      {/* Stats */}
      <div className="stats">
        <StatsCard title="Total" value={tasks.length} />
        <StatsCard title="Completed" value={tasks.filter(t => t.status?.toLowerCase() === "completed").length} />
        <StatsCard title="Pending" value={tasks.filter(t => t.status?.toLowerCase() === "pending").length} />
      </div>

      {/* Actions */}
      <div className="actions">
        <button onClick={navigateForCreateTask} className="create-btn">+ Create Task</button>
        
      </div>
      {/* Task List */}
      <div className="task-list">
        {tasks.map(task => (
          <DashboardTaskCards key={task.id} task={task} onDelete={deleteTask} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;