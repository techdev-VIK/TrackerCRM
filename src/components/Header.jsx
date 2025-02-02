import React from 'react';

const Header = () => {
  return (
    <header className="bg-primary text-white p-3">
      <div className="container-fluid">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h4">TrackerCRM</h1>
          <nav>
            <ul className="list-unstyled d-flex mb-0">
              <li className="ms-3">
                <a href="#" className="text-white text-decoration-none">Home</a>
              </li>
              <li className="ms-3">
                <a href="#" className="text-white text-decoration-none">Reports</a>
              </li>
              <li className="ms-3">
                <a href="#" className="text-white text-decoration-none">Settings</a>
              </li>
              
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
