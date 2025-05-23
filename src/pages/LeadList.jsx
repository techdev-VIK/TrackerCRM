import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar"
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";
import axios from "axios";


const LeadList = () => {

    const { leads, leadsLoading, leadsError } = useContext(TrackerContext);
    
    const [searchLead, setSearchLead] = useState('')

    const [statusLead, setStatusLead] = useState('')

    const [sortBy, setSortBy] = useState('');

    const [filteredLeads, setFilteredLeads] = useState(leads);



    const searchLeadsQuery = async () => {
        try {
            const response = await axios('https://tracker-backend-alpha.vercel.app/queryLeads/?q=' + searchLead);

            setFilteredLeads(response.data);

        } catch (error) {
            console.error(error)
        }
    }
    

        useEffect(() => {
            
            const timer = setTimeout(() => {
                searchLeadsQuery();
            }, 100)

            return() => {
                clearTimeout(timer)
            }

    }, [searchLead]);


        const filteredStatus = (statusLead) ? filteredLeads.filter((lead) => lead.status === statusLead) : filteredLeads;


        const priorityOrder = {
        High: 1,
        Medium: 2,
        Low: 3
        };

        if(sortBy === "Priority"){
        filteredStatus.sort((a,b) => priorityOrder[a.priority] - priorityOrder[b.priority])
        }else if(sortBy === "Time To Close"){
        filteredStatus.sort((a,b) => a.timeToClose - b.timeToClose)
        }else{
        filteredStatus
        }
 


    
    if (leadsError) return <div className="alert alert-danger mt-5 text-center">[{leadsError}]    Sorry, records not available, please check later.</div>

    if (leadsLoading) return <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}><div className="spinner-border text-primary" style={{width: "5rem", height: "5rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
    </div>
    </div>

    return(
        <>
        
          <div className="d-flex">
            <Sidebar />

            <div className="py-2 mx-3 flex-grow-1">
               
            <div className="d-flex justify-content-between">
            <h2 className="mb-0">Lead Overview ({leads.length})</h2>
            <Link to="/lead/addLead" className="btn btn-primary">
                + Add Lead
            </Link>
            </div>

                <hr />

            <div className="row mt-3 mx-3 mb-5">

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
                    <select id="sortByOption" className="form-select" onChange={(e) => setSortBy(e.target.value)}>
                        <option value="" disabled>Sort By</option>
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
                    {filteredStatus.length > 0 ? (filteredStatus.map((lead) => {

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
                            <td>{lead.salesAgent.name}</td>
                            <td><Link className="btn btn-sm btn-success" to={`/lead/details/${lead._id}`}>Details</Link></td>
                        </tr>
                        )
                    }
                    )): <tr><td colSpan="6" className="text-center">No results found.</td></tr>}
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