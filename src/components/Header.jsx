import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-dark text-white p-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h4">TrackerCRM</h1>
          <nav>
            <ul className="list-unstyled d-flex mb-0">
              <li className="ms-3">
                <NavLink to="/" className="text-white text-decoration-none">Home</NavLink>
              </li>
              <li className="ms-3">
                <NavLink to="/report" className="text-white text-decoration-none">Reports</NavLink>
              </li>
              <li className="ms-3">
                <NavLink to="/" className="text-white text-decoration-none">Settings</NavLink>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
