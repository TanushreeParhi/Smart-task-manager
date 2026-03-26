import React, { useState}  from 'react'
import axios from "axios";
import '../../landing_page_bg_design/signUp.css'
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const navigate = useNavigate();
   const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      
      const res = await axios.post("http://localhost:4000/signup", formData);
      alert("Signup Successful!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Error signing up");
    }
  };

  return (
    <div className='body-bg'>
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create Account</h2>
        <p>Start managing your tasks efficiently</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

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

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />

          <button type="submit">Sign Up</button>
        </form>

        <span className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </span>
      </div>
    </div>
    </div>
  )
}

export default Signup