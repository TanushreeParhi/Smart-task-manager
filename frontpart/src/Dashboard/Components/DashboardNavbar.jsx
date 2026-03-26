// components/DashboardNavbar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const DashboardNavbar = () => {
    const navigate = useNavigate();
    function handleLogoutNavigate(){
        localStorage.removeItem("token");
        navigate("/");
    }
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="navbar">
      <h2 className="logo">TaskManager</h2>

      <div className="nav-right">
        <span className="user">{user?.fullName}</span>
        <button onClick={handleLogoutNavigate} className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default DashboardNavbar;