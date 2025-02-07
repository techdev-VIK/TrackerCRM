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
                    <div className="col-md-12">
                        <div className="card">
                            <table className="table table-hover">
                                <thead className="table-primary">
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
                                           <td><Link className="btn btn-sm btn-success" to="/lead/details">Details</Link></td>
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