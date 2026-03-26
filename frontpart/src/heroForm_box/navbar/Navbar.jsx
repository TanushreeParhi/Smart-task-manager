import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent shadow">
      <div className="container">
        {/* Logo */}
        <a className="navbar-brand fw-bold" href="#">
          TaskManager
        </a>

        {/* Mobile Menu Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-4 me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-4">
              <a
                className="nav-link active text-white fs-5 fw-bold border-bottom border-2"
                href="#"
              >
                Home
              </a>
            </li>

            <li className="nav-item ms-4 dropdown">
              <a
                className="nav-link fs-5 fw-bold text-white dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Features
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#">
                    Create Tasks
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Track Progress
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Smart Organization
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Secure Account
                  </a>
                </li>
              </ul>
            </li>

            <li className="nav-item ms-4">
              <a className="nav-link fs-5 fw-bold text-white" href="#">
                Pricing
              </a>
            </li>

            <li className="nav-item ms-4">
              <Link className="nav-link text-white fs-5 fw-bold" to="/about">
                About
              </Link>
            </li>
          </ul>

          {/* Right Buttons */}
          <div className="d-flex gap-2">
            <Link to="/login">
              <button className="btn btn-outline-light">Login</button>
            </Link>

            <Link to="/signup">
              <button className="btn btn-primary"> Sign Up</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
