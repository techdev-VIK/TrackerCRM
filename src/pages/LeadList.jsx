import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";


const LeadList = () => {

    const { sampleLeads:leads } = useContext(TrackerContext);

    const [searchLead, setSearchLead] = useState('')

    const [statusLead, setStatusLead] = useState('')

    const [sortBy, setSortBy] = useState('');

    const filteredLead = leads.filter((lead) => lead.name.toLowerCase().includes(searchLead.toLowerCase()));

    const filteredStatus = (statusLead) ? filteredLead.filter((lead) => lead.status === statusLead) : filteredLead;

    if(sortBy === "Priority"){
        filteredStatus.sort((a,b) => a.priority.localeCompare(b.priority))
    }else if(sortBy === "Time To Close"){
        filteredStatus.sort((a,b) => a.timeToClose - b.timeToClose)
    }else{
        filteredStatus;
    }
    
    

    return(
        <>
        
          <div className="d-flex">
            <Sidebar />

            <div className="py-2 mx-3 flex-grow-1">
               
            <div className="d-flex justify-content-between">
            <h2 className="mb-0">Lead Overview</h2>
            <Link to="/lead/addLead" className="btn btn-primary">
                + Add Lead
            </Link>
            </div>

                <hr />

            <div className="row mt-3 mx-3">

            <div className="col-md-12 d-flex justify-content-between mb-3">

                <div>
                    <input type="search"
                     placeholder="Search by lead..." className="form-control w-100" value={searchLead} onChange={(e) => setSearchLead(e.target.value)}/>
                </div>


                <div className="d-flex">
                <div className="me-3">
                <select id="filterByStatus" className="form-select" onChange={(e) => setStatusLead(e.target.value)}>
                    <option value="">Filter By Status</option>
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Qualified">Qualified</option>
                    <option value="Proposal Sent">Proposal Sent</option>
                    <option value="Closed">Closed</option>
                </select>
                </div>

                <div>
                    <select id="" className="form-select" onChange={(e) => setSortBy(e.target.value)}>
                        <option value="">Sort By</option>
                        <option value="Priority">Priority</option>
                        <option value="Time To Close">Time To Close</option>
                    </select>
                </div>
                </div>
                
            </div>

            
            <div className="col-md-12">
                <div className="card p-0">
                <table className="table table-hover">
                    <thead className="table-primary">
                    <tr>
                        <th>Lead Name</th>
                        <th>Status</th>
                        <th>Priority</th>
                        <th>Time To Close</th>
                        <th>Sales Agent</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {filteredStatus.map((lead) => {

                        const name = lead.name;

                        const searchText = searchLead.toLowerCase();

                        const index = name.toLowerCase().indexOf(searchText);

                        
                            const beforeMatch = name.substring(0,index);

                            const matchText = name.substring(index, index + searchLead.length);

                            const afterMatch = name.substring(index + searchLead.length)
                      
                        
                        return(
                            <tr key={lead._id}>
                            <td>{beforeMatch}{<span className="bg-warning">{matchText}</span>}{afterMatch}</td>
                            <td>{lead.status}</td>
                            <td>{lead.priority}</td>
                            <td>{lead.timeToClose}</td>
                            <td>{lead.salesAgent}</td>
                            <td><Link className="btn btn-sm btn-success" to={`/lead/details/${lead._id}`}>Details</Link></td>
                        </tr>
                        )
                    }
                    )}
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