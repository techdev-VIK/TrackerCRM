import { useContext } from "react";

import Sidebar from "../components/Sidebar";
import TrackerContext from "../contexts/TrackerContext";

const Dashboard = () => {
  const { sampleLeads:leads } = useContext(TrackerContext);

  // Count leads by status
  const leadStatusCounts = leads.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;

    return acc;
  }, {});

  // High priority leads
  const highPriorityLeads = leads.filter((lead) => lead.priority === "High");

  return (
    <>
      <div className="d-flex" style={{backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}} >
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
              <h4>Quick Filters</h4>
              <div className="d-flex gap-2 flex-wrap">
                {["New", "Contacted", "Qualified", "Proposal Sent", "Closed"].map((status) => (
                  <button key={status} className="btn btn-outline-primary">
                    {status}
                  </button>
                ))}
              </div>
            </div>

            {/* High Priority Leads */}
            <div className="mt-4">
              <h4>Top Priority Leads</h4>
              <ul className="list-group">
                {highPriorityLeads.length > 0 ? (
                  highPriorityLeads.map((lead) => (
                    <li key={lead.id} className="list-group-item d-flex justify-content-between">
                      <span>{lead.name} ({lead.source})</span>
                      <span className="badge bg-danger">High</span>
                    </li>
                  ))
                ) : (
                  <li className="list-group-item text-muted">No high-priority leads</li>
                )}
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="mt-4 d-flex gap-3">
              <button className="btn btn-primary">Add New Lead</button>
              <button className="btn btn-secondary">View Reports</button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
