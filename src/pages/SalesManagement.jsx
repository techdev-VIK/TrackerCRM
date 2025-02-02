import React from 'react';
import { Link } from 'react-router-dom';


const SalesAgentManagement = () => {
  const agents = [
    { name: 'John Doe', email: 'john@example.com' },
    { name: 'Jane Smith', email: 'jane@example.com' },
  ];

  return (
    <div className="sales-agent-management">
      <div className="sidebar">
        <h5>Sales Agent Management</h5>
        <Link to="/dashboard" className="btn-back">
          Back to Dashboard
        </Link>
      </div>

      <div className="main-content">
        <div className="card">
          <div className="card-body">
            <h4>Sales Agent List</h4>
            <ul className="agent-list">
              {agents.map((agent, index) => (
                <li key={index} className="agent-item">
                  <strong>Agent:</strong> {agent.name} - <em>{agent.email}</em>
                </li>
              ))}
            </ul>
            <Link to="/add-agent">
              <button className="btn-add">Add New Agent</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesAgentManagement;
