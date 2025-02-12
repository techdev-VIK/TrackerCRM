import { useContext, useEffect, useState } from "react";

import Sidebar from "../components/Sidebar";
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const { leads, agents } = useContext(TrackerContext);

//   console.log("Leads from context:", leads);


  const [priorityLeads, setPriorityLeads] = useState([])

  const [selectedPriority, setSelectedPriority] = useState('High')

  // Count leads by status
  const leadStatusCounts = leads.reduce((acc, curr) => {
    acc[curr.status] = (acc[curr.status] || 0) + 1;

    return acc;
  }, {});


  const totalInPipeline = leads.reduce((acc, curr) => {
    acc = curr.budget + acc

    return acc
  }, 0).toLocaleString("en-US");


  const monthlyForecast = leads.reduce((acc, curr) => {
    if(curr.timeToClose <= 30){
        acc = curr.budget + acc
    }
    return acc
  }, 0).toLocaleString("en-US");


  const dealsClosedMoney = leads.reduce((acc, curr) => {
    if(curr.status === "Closed"){
        acc = curr.budget + acc
    }
    return acc
  }, 0).toLocaleString("en-US");



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
      <div className="d-flex">
        <Sidebar />

        <div className="my-2 mx-3 flex-grow-1">

        <div className="d-flex justify-content-between">
        <h2 className="mb-0">Dashboard</h2>
          <Link to="/sales" className="btn btn-primary">
            Sales
          </Link>
        </div>
          
          <hr />

          {/* First 3 Cards (Pipeline Status, Existing Layout) */}
          <main className="mb-5">
            <div className="row">
              <div className="col-md-4 col-sm-6 mt-2">
                <div className="card p-3">
                  <div className="card-title">
                    <div className="d-flex justify-content-between">
                      <h4>Monthly Forecast</h4>
                      <div>$</div>
                    </div>
                  </div>
                  <div className="card-body p-1 p-0">
                    <h5>${monthlyForecast}</h5>
                    <small>
                      Projected for this month
                    </small>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mt-2">
                <div className="card p-3">
                  <div className="card-title">
                    <div className="d-flex justify-content-between">
                      <h4>Deals Closed</h4>
                      <span className="bi bi-people me-2"></span>
                    </div>
                  </div>
                  <div className="card-body p-1">
                    <h5>${dealsClosedMoney}</h5>
                    <small>Active agents · {agents.length} on active deals</small>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-6 mt-2">
                <div className="card p-3">
                  <div className="card-title">
                    <div className="d-flex justify-content-between">
                      <h4>Pipeline Status</h4>
                      <span className="bi bi-graph-up-arrow me-2"></span>
                    </div>
                  </div>
                  <div className="card-body p-1">
                    <h5>${totalInPipeline}</h5>
                    <small>Active leads · {leads.length} leads in pipeline</small>
                  </div>
                </div>
              </div>
            </div>

            {/* Lead Status Overview */}
            <div className="mt-2">
              <div className="row">
                <div className="col-md-12 mt-2">
                    <div className="card p-0">
                        <div className="card-body">
                        <h4>Lead Status Overview</h4>
                        <div className="row">
                            {["New", "Contacted", "Qualified", "Proposal Sent", "Closed"].map((status) => (
                            <div key={status} className="col-md-2 col-sm-4 flex-grow-1 mt-1">
                                <div className="card text-center p-2">
                                <h6>{status}</h6>
                                <div className="lead">{leadStatusCounts[status] || 0}</div>
                                </div>
                            </div>
                            ))}
                        </div>
                        </div>
                        </div>
                    </div>
                </div>  

              </div>
              

            {/* Quick Actions */}
            <div className="mt-2">
              <div className="row">
                <div className="col-md-12 mt-2">
                <div className="card p-0">
                    <div className="card-body">
                    <h4>Quick Actions </h4>
                        <div className="row">
                            <div className="col-md-4 mt-2">
                                <div className="card">
                                    <div className="card-body p-0 text-center">
                                        <Link to="/lead/addLead">
                                        <div className="bi bi-person-plus fs-5 circle-icon"></div>
                                        </Link>
                                        <div>
                                            New Lead
                                        </div>
                                        <small className="mt-1 fw-light">Add new prospect</small>
                                    </div>
                                </div>
                            </div>


                            <div className="col-md-4 mt-2">
                                <div className="card">
                                    <div className="card-body p-0 text-center">
                                    <Link to="/reports">
                                    <div className="bi bi-receipt fs-5 circle-icon"></div>
                                    </Link>
                                        <div>
                                            See Reports
                                        </div>
                                        <small className="mt-1 fw-light">View earnings</small>
                                    </div>
                                </div>
                            </div>
                            

                            <div className="col-md-4 mt-2">
                                <div className="card">
                                    <div className="card-body p-0 text-center">
                                        <Link to="/sales"><div className="bi bi-cash-coin fs-5 circle-icon"></div></Link>
                                        <div>
                                            View  Deals
                                        </div>
                                        <small className="mt-1 fw-light">Search for new deals</small>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
              </div>
              </div>
            </div>

            {/* Quick Filters */}
            <div className="mt-3">             
              <div className="row">
                <div className="col-md-12">
                    <div className="card p-2">
                        <div className="card-body">
                        <h4>Quick Filters </h4>

                        <div className="d-flex justify-content-between mt-4">
                        
                        <div className="fs-5">{selectedPriority} Priority Leads</div>
                        <div className="d-flex gap-2 flex-wrap">
                        <button className={`btn btn-sm ${selectedPriority === "High" ? "btn-danger": "btn-outline-danger"}`} value="High" onClick={priorityHandler}>
                        High
                        </button>

                        <button className={`btn btn-sm ${selectedPriority === "Medium" ? "btn-warning": "btn-outline-warning"}`} value="Medium" onClick={priorityHandler}>
                        Medium
                        </button>

                        <button className={`btn btn-sm ${selectedPriority === "Low" ? "btn-primary": "btn-outline-primary"}`} value="Low" onClick={priorityHandler}>
                        Low
                        </button>
                        </div>

                        </div>
                        

                    {/* Priority Leads */}
                    <div className="mt-3">
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
                        </div>
                    </div>
                </div>
              </div>

              
            </div>

            
          </main>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
