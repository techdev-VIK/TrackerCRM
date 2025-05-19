import { useContext, useState } from "react";
import Sidebar from "../components/Sidebar"
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";



const SalesAgentList = () => {

    const { agents, agentsLoading, agentsError } = useContext(TrackerContext);

    const [searchAgent, setAgentSearch] = useState('');


    const filteredArray = agents.filter((agent) => agent.name.toLowerCase().includes(searchAgent.toLowerCase()))


    if (agentsError) return <div className="alert alert-danger mt-5 text-center">[{agentsError}] Sorry, Records not available, please check later.</div>

    if (agentsLoading) return <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}><div className="spinner-border text-primary" style={{width: "5rem", height: "5rem"}} role="status">
    <span className="visually-hidden">Loading...</span>
    </div></div>
      

    return(
        <>
        
          <div className="d-flex">
            <Sidebar />

            <div className="py-2 mx-3 flex-grow-1">
               
            <div className="d-flex justify-content-between">
            <h2 className="mb-0">Sales Agent Overview ({agents.length})</h2>
            <Link to="/sales/addSaleAgent" className="btn btn-primary">
                + Add Agent
            </Link>
            </div>

            <hr />

            <div className="row mt-3 mx-3">

            <div className="col-md-12 d-flex justify-content-start mb-3">

                <div >
                    <input type="search"
                    onChange={(e) => setAgentSearch(e.target.value)}
                    placeholder="Search by agent..." className="form-control w-100"/>
                </div>
                
            </div>

            
            <div className="col-md-12 mb-5">
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
                    {filteredArray.map((agent) => {
                        
                        const name = agent.name;

                        const index = name.toLowerCase().indexOf(searchAgent.toLowerCase());


                        const beforeMatch = name.substring(0, index);

                        const matchText = name.substring(index, index + searchAgent.length);

                        const afterMatch = name.substring(index + searchAgent.length);

                    return(
                            <tr key={agent._id}>
                            <td>{beforeMatch}<span className="bg-warning">{matchText}</span>{afterMatch}</td>
                            <td>{agent.email}</td>
                            <td>
                            <Link to={`/salesAgents/details/${agent._id}`} className="btn btn-sm btn-success">Details</Link>
                            </td>
                        </tr>
                    )
                        
                    })}
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