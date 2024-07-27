import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import "./NavbarTm.css";

const NavbarTM = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nv">
      <div className="nv-header">
        <div className="nv-logo">TEAM_INFO</div>
        <button className="nv-hamburger" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <div className={`nv-links ${menuOpen ? "open" : ""}`}>
        <Link to="/teammember/progress">PROGRESS</Link>
        <Link to="/teammember/issues">ISSUES</Link>
        <Link to="/login">LOGOUT</Link>
      </div>
    </div>
    
  );
};

export default NavbarTM;
