import { useContext, useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { sampleLeads:leads } = useContext(TrackerContext);

  const [priorityLeads, setPriorityLeads] = useState([])

  const [selectedPriority, setSelectedPriority] = useState('High')

  // Count leads by status
  const leadStatusCounts = leads.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;

    return acc;
  }, {});


  useEffect(() => {
    const highData = leads.filter((lead) => lead.priority === "High");
    setPriorityLeads(highData);
  }, [leads])

  const priorityHandler = (e) => {
    const {value} = e.target;

    setSelectedPriority(value)

    const filteredData = leads.filter((lead) => lead.priority === value);

    setPriorityLeads(filteredData);

  }

  const priorityColors = {
    High: "bg-danger",
    Medium: "bg-warning",
    Low: "bg-primary"
  };
  

  return (
    <>
      <div className="d-flex" >
        <Sidebar />

        <div className="py-2 mx-3 flex-grow-1">

        <div className="d-flex justify-content-between">
        <h2 className="mb-0">Dashboard</h2>
          <button className="btn btn-primary">
            Logout
          </button>
        </div>
          
          <hr />

          {/* First 3 Cards (Pipeline Status, Existing Layout) */}
          <main className="">
            <div className="row">
              <div className="col-md-4 col-sm-6 mt-2">
                <div className="card p-1">
                  <div className="card-title">
                    <div className="d-flex justify-content-between">
                      <h4>Monthly Residuals</h4>
                      <div>$</div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5>$40,000</h5>
                    <small>
                      <span className="text-success">+15.69%</span> from last month
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mt-2">
                <div className="card p-1">
                  <div className="card-title">
                    <div className="d-flex justify-content-between">
                      <h4>Annual Residuals</h4>
                      <span className="bi bi-people me-2"></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5>$440,000</h5>
                    <small>Projected for this year</small>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mt-2">
                <div className="card p-1">
                  <div className="card-title">
                    <div className="d-flex justify-content-between">
                      <h4>Pipeline Status</h4>
                      <span className="bi bi-graph-up-arrow me-2"></span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5>$40,000</h5>
                    <small>Active leads · 12 new this month</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Status Overview */}
            <div className="mt-4">
              <h4>Lead Status Overview</h4>
              <div className="row">
                {["New", "Contacted", "Qualified", "Proposal Sent", "Closed"].map((status) => (
                  <div key={status} className="col-md-2 col-sm-4 flex-grow-1 mt-2">
                    <div className="card text-center p-2">
                      <h6>{status}</h6>
                      <p className="lead">{leadStatusCounts[status] || 0}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-4">
              <h4>Quick Filters: </h4>
              <div className="d-flex gap-2 flex-wrap">
                
                  <button className={`btn ${selectedPriority === "High" ? "btn-danger": "btn-outline-danger"}`} value="High" onClick={priorityHandler}>
                    High
                  </button>

                  <button className={`btn ${selectedPriority === "Medium" ? "btn-warning": "btn-outline-warning"}`} value="Medium" onClick={priorityHandler}>
                    Medium
                  </button>

                  <button className={`btn ${selectedPriority === "Low" ? "btn-primary": "btn-outline-primary"}`} value="Low" onClick={priorityHandler}>
                    Low
                  </button>
              </div>
            </div>

            {/* Priority Leads */}
            <div className="mt-4">
              <h4>{selectedPriority} Priority Leads</h4>
              <ul className="list-group">
                {priorityLeads.length > 0 ? (
                  priorityLeads.map((lead, index) => (
                    <li key={index} className="list-group-item d-flex justify-content-between">
                      <span>{lead.name} ({lead.source})</span>
                      <span className={`badge ${priorityColors[lead.priority]}`}>{lead.priority}</span>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-muted">No leads available</li>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="my-4 d-flex gap-3">
              <Link to="/lead/addLead" className="btn btn-primary">Add New Lead</Link>
              <Link to="/sales/addSaleAgent" className="btn btn-secondary">Add New Agent</Link>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
