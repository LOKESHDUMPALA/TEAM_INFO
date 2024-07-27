import React, { useState } from 'react';
import './NavbarTL.css';
import { Link } from 'react-router-dom';

const NavbarTL = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <div className="logo">TEAM_INFO</div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        <li><Link to="/teamlead/progress">Progress</Link></li>
        <li><Link to="/teamlead/bargraphs">BarGraphs</Link></li>
        <li><Link to="/teamlead/piecharts">PieCharts</Link></li>
        <li><Link to="/teamlead/issues">Issues</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </div>
  );
}

export default NavbarTL;
