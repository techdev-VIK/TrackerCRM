import React from "react";
import { Link } from "react-router-dom";


const HomePage1 = () => {
  return (
    <div className="container-fluid">
      <div className="row vh-100">
        {/* Sidebar */}
        <nav className="col-md-3 d-md-block bg-secondary sidebar text-white p-3">
          <ul className="nav flex-column mt-3">
            <li className="nav-item">
              <Link to="/lead" className="nav-link active text-white">Leads</Link>
            </li>
            <li className="nav-item">
              <Link to="/sales" className="nav-link text-white">Sales</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-white">Agents</Link>
            </li>
            <li className="nav-item">
              <Link to="/report" className="nav-link text-white">Reports</Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link text-white">Settings</Link>
            </li>
          </ul>
        </nav>

        {/* Main Content */}
        <main className="col-md-9">
          <h4 className="mt-3">Dashboard</h4>

          {/* Leads Section */}
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Leads</h5>
              <button className="btn btn-outline-primary me-2">Lead 1</button>
              <button className="btn btn-outline-primary me-2">Lead 2</button>
              <button className="btn btn-outline-primary">Lead 3</button>
            </div>
          </div>

          {/* Lead Status */}
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Lead Status</h5>
              <p>New: <strong>5</strong> Leads</p>
              <p>Contacted: <strong>3</strong> Leads</p>
              <p>Qualified: <strong>2</strong> Leads</p>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Quick Filters</h5>
              <button className="btn btn-info me-2">New</button>
              <button className="btn btn-info">Contacted</button>
            </div>
          </div>

          {/* Add New Lead Button */}
          <Link to="/lead/addLead"><button className="btn btn-success mt-3">Add New Lead</button></Link>
        </main>
      </div>
    </div>
  );
};

export default HomePage1;
