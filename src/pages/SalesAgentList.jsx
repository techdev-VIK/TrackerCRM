import { useContext } from "react";
import Sidebar from "../components/Sidebar"
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";


export const agents = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Michael Brown', email: 'michael.brown@example.com' },
    { id: 4, name: 'Emily Davis', email: 'emily.davis@example.com' },
    { id: 5, name: 'David Wilson', email: 'david.wilson@example.com' },
    { id: 6, name: 'Olivia Johnson', email: 'olivia.johnson@example.com' },
    { id: 7, name: 'Chris Martin', email: 'chris.martin@example.com' },
    { id: 8, name: 'Sophia Lee', email: 'sophia.lee@example.com' },
    { id: 9, name: 'Daniel Clark', email: 'daniel.clark@example.com' },
    { id: 10, name: 'Ava Walker', email: 'ava.walker@example.com' },
    { id: 11, name: 'James Hall', email: 'james.hall@example.com' },
    { id: 12, name: 'Isabella Young', email: 'isabella.young@example.com' }
  ];


const SalesAgentList = () => {

    const { sampleLeads:leads } = useContext(TrackerContext);
      

    return(
        <>
        
          <div className="d-flex">
            <Sidebar />

            <div className="py-2 mx-3 flex-grow-1">
               
            <div className="d-flex justify-content-between">
            <h2 className="mb-0">Sales Agent Overview</h2>
            <Link to="/sales/addSaleAgent" className="btn btn-primary">
                + Add Agent
            </Link>
            </div>

            <hr />

            <div className="row mt-3 mx-3">

            {/* <div className="col-md-12 d-flex justify-content-between mb-3">

                <div >
                    <input type="search" placeholder="Search by agent..." className="form-control w-100"/>
                </div>


                <div className="d-flex ">
                <div className="me-3">
                <select id="filterByStatus" className="form-select">
                    <option value="">Filter By Status</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Closed">Closed</option>
                </select>
                </div>

                <div>
                    <select id="" className="form-select">
                        <option value="">Sort By</option>
                        <option value="Priority">Priority</option>
                        <option value="Time To Close">Time To Close</option>
                    </select>
                </div>
                </div>
                
                
            </div> */}

            
            <div className="col-md-12">
                <div className="card p-0">
                <table className="table table-hover">
                    <thead className="table-primary">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {agents.map((agent, index) => (
                        <tr key={index}>
                            <td>{agent.name}</td>
                            <td>{agent.email}</td>
                            <td>
                            <Link to={`/salesAgents/details/${agent.id}`} className="btn btn-sm btn-success">Details</Link>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                </div>
              </div>

            </div>

          </div>

        </>
    )
}

export default SalesAgentList;