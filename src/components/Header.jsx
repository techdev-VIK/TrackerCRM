import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar bg-body-tertiary navbar-expand-lg p-3" style={{position: "fixed", width: "100%", zIndex: 1000}}>
  <div className="container-fluid">
    <NavLink className="work-sans-normal me-5 title-text" to="/">Tracker</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

      <li className="nav-item ms-3">
          <NavLink className="nav-link" aria-current="page" to="/dashboard">Dashboard</NavLink>
        </li>

        <li className="nav-item ms-3">
          <NavLink className="nav-link" aria-current="page" to="/lead">Leads</NavLink>
        </li>

        <li className="nav-item ms-3">
          <NavLink className="nav-link" aria-current="page" to="/salesAgents">Agents</NavLink>
        </li>

        <li className="nav-item ms-3">
          <NavLink className="nav-link" to="/sales">Sales</NavLink>
        </li>

        <li className="nav-item ms-3">
          <NavLink className="nav-link" to="/reports">Reports</NavLink>
        </li>

        
      </ul>
    </div>
  </div>
</nav>
  );
};

export default Header;
