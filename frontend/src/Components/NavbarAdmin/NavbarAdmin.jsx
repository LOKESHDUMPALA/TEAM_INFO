import React, { useState } from "react";
import "./NavbarAdmin.css";
import { Link } from "react-router-dom";
import Dashboard from "../DashboardAdmin/Dashboard";

const NavbarAdmin = () => {
  const [dashboardState, setDashboardState] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleState = (states) => {
    setDashboardState(states);
    setMenuOpen(false); // Close menu when navigating
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="nv">
        <div className="nv-header">
          <div className="nv-logo">ADMIN</div>
          <button className="nv-hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <div className={`nv-links ${menuOpen ? "open" : ""}`}>
          <Link to="/admin/dashboard" onClick={() => handleState(false)}>
            DASHBOARD
          </Link>
          <Link to="/admin/teams_progress" onClick={() => handleState(false)}>
            TEAMS_PROGRESS
          </Link>
          <Link to="/admin/barcharts" onClick={() => handleState(false)}>
            BARCHARTS
          </Link>
          <Link to="/admin/piecharts" onClick={() => handleState(false)}>
            PIECHARTS
          </Link>
          <Link to="/admin/calendar">CALENDAR</Link>
          <Link to="/login">LOGOUT</Link>
        </div>
      </div>
      {dashboardState && <Dashboard />}
    </>
  );
};

export default NavbarAdmin;
