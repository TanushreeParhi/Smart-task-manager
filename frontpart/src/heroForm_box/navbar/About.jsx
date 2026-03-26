import React from "react";
import "../../landing_page_bg_design/About.css";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <h1>About TaskManager</h1>
        <p>
          A smart and secure way to manage your daily tasks, track progress, and
          boost productivity — all in one place.
        </p>
      </section>

      {/* Features Section */}
      <section className="about-features">
        <h2>What We Offer</h2>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🔐 Secure Authentication</h3>
            <p>
              Login & signup system with JWT authentication ensures your data is
              safe and accessible only to you.
            </p>
          </div>

          <div className="feature-card">
            <h3>📊 Smart Dashboard</h3>
            <p>
              View total, completed, and pending tasks in one place with a clean
              and intuitive interface.
            </p>
          </div>

          <div className="feature-card">
            <h3>✅ Task Management</h3>
            <p>
              Create, update, delete, and search tasks easily with real-time
              updates.
            </p>
          </div>

          <div className="feature-card">
            <h3>👤 User-Specific Data</h3>
            <p>
              Each user sees only their own tasks — ensuring complete privacy
              and personalization.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔄 Real-Time Updates</h3>
            <p>
              Tasks instantly reflect changes like completion, deletion, or
              editing without confusion.
            </p>
          </div>

          <div className="feature-card">
            <h3>🔍 Search & Filter</h3>
            <p>
              Quickly find tasks using search and filter by pending or completed
              status.
            </p>
          </div>

          <div className="feature-card">
            <h3>⚡ Fast Performance</h3>
            <p>
              Optimized backend and frontend ensure quick task creation,
              updates, and smooth user experience without delays.
            </p>
          </div>

          <div className="feature-card">
            <h3>📱 Responsive Design</h3>
            <p>
              Access your tasks anytime, anywhere. The app works seamlessly
              across desktop, tablet, and mobile devices.
            </p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="about-flow">
        <h2>How It Works</h2>

        <div className="flow-steps">
          <div>1. Sign Up / Login</div>
          <div>2. Access Dashboard</div>
          <div>3. Create Tasks</div>
          <div>4. Track Progress</div>
          <div>5. Manage & Update</div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <h2>Start Managing Your Tasks Today 🚀</h2>
        <button onClick={() => (window.location.href = "/login")}>
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
