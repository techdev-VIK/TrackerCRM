import { useContext } from "react";
import Sidebar from "../components/Sidebar"
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";


const LeadList = () => {

    const { sampleLeads:leads } = useContext(TrackerContext);

    return(
        <>
        
          <div className="d-flex">
            <Sidebar />

            <div className="py-2 mx-3 flex-grow-1">
               
            <div className="d-flex justify-content-between">
            <h2 className="mb-0">Lead Overview</h2>
            <button className="btn btn-primary">
                Logout
            </button>
            </div>

                <hr />

            <div className="row mt-3 mx-3">

            <div className="col-md-12 d-flex justify-content-between mb-3">

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
                
                
            </div>

            <div>

            </div>
            
            <div className="col-md-12">
                <div className="card p-0">
                <table className="table table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Sales Agent</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {leads.map((lead, index) => (
                        <tr key={index}>
                            <td>{lead.name}</td>
                            <td>{lead.status}</td>
                            <td>{lead.salesAgent}</td>
                            <td><Link className="btn btn-sm btn-success" to={`/lead/details/${lead._id}`}>Details</Link></td>
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

export default LeadList;