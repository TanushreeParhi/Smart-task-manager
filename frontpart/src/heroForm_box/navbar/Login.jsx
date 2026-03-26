// Login.jsx
import React, { useState } from "react";
import "../../landing_page_bg_design/Login.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const homeNavigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:4000/login", formData);
      
      alert("Login Successful");
      console.log(res.data);
      
       // store token
      localStorage.setItem("token", res.data.token);

      // store user name email
      localStorage.setItem("user", JSON.stringify(res.data.user))
     
      homeNavigate("/dashboard");
    } catch (err) {
      console.error(err);
      alert("Invalid credentials");
    }
  };

  return (
    <div className="body-bg" >
    <div className="auth-container">
      <div className="auth-card">
        <h2>Welcome Back</h2>
        <p>Login to manage your tasks</p>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            required
          />

          <div className="auth-options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          <button type="submit">Login</button>
        </form>

        <span className="switch-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </span>
      </div>
    </div>
    </div>
  );
};

export default Login;