import React from "react";
import "../landing_page_bg_design/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-brand">
          <h2>TaskManager</h2>
          <p>Manage your tasks smarter and boost productivity with ease.</p>
        </div>

        {/* Links */}
        <div className="footer-links">
          <div>
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>Updates</li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        {/* Social */}
        <div className="footer-social">
          <h4>Follow Us</h4>
          <div className="icons">
            <span>🌐</span>
            <span>🐦</span>
            <span>💼</span>
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© 2026 TaskManager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;