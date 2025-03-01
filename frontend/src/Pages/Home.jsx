import React from "react";
import "./CSS/Home.css";

const Home = () => {
  return (
    <div>
      <header className="header">
        <a href="/" className="logo">
          <i className="fas fa-users"></i> Teams
        </a>
        <nav className="nav-items">
          <a href="/login">Login</a>
          <a href="/signup">Register</a>
        </nav>
      </header>

      <main>
        <div className="intro">
          <h1 className="title">TEAM INFO</h1>
          <p className="subtitle">The Project Management Dashboard</p>
          
        </div>

        <div className="achievements">
          <div className="work">
            <i className="fas fa-user-shield"></i>
            <p className="work-heading">Admin</p>
            <p className="work-text">Administrator with full access</p>
          </div>
          <div className="work">
            <i className="fas fa-user-tie"></i>
            <p className="work-heading">Team Lead</p>
            <p className="work-text">Leader of the team</p>
          </div>
          <div className="work">
            <i className="fas fa-users"></i>
            <p className="work-heading">Team Member</p>
            <p className="work-text">Member of the team</p>
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="copy">&copy; 2025 Developer</div>
        <div className="bottom-links">
          <div className="links">
            <span>More Info</span>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="links">
            <span>Social Links</span>
            <a href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
