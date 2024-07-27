import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import "./TeamMember.css";
import NavbarTM from "../NavbarTM/NavbarTM";
import { Route, Routes } from "react-router-dom";
import ProgressTM from "../ProgressTM/ProgressTM";
import Issues from "../Issues/Issues";
import UserContext from '../../Context/ContextAPI';

const TeamMember = () => {
  const { user } = useContext(UserContext);
  const location = useLocation();

  return (
    <div className="team-member-container">
      <div className="background-image"></div>
      <NavbarTM />
      <Routes>
        <Route path="progress" element={<ProgressTM />} />
        <Route path="issues" element={<Issues />} />
      </Routes>
      {location.pathname === "/teammember" && (
        <div className="centered-text">
          <h1>Hi {user.name}</h1>
          <h1>Welcome to the Team_Info</h1>
        </div>
      )}
    </div>
  );
};

export default TeamMember;
