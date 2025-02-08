import { useContext, useState } from "react";
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

    
    const [searchAgent, setAgentSearch] = useState('');


    const filteredArray = agents.filter((agent) => agent.name.toLowerCase().includes(searchAgent.toLowerCase()))
      

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

            <div className="col-md-12 d-flex justify-content-start mb-3">

                <div >
                    <input type="search"
                    onChange={(e) => setAgentSearch(e.target.value)}
                    placeholder="Search by agent..." className="form-control w-100"/>
                </div>
                
            </div>

            
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
                    {filteredArray.map((agent) => {
                        
                        const name = agent.name;

                        const index = name.toLowerCase().indexOf(searchAgent.toLowerCase());


                        const beforeMatch = name.substring(0, index);

                        const matchText = name.substring(index, index + searchAgent.length);

                        const afterMatch = name.substring(index + searchAgent.length);

                    return(
                            <tr key={agent.id}>
                            <td>{beforeMatch}<span className="bg-warning">{matchText}</span>{afterMatch}</td>
                            <td>{agent.email}</td>
                            <td>
                            <Link to={`/salesAgents/details/${agent.id}`} className="btn btn-sm btn-success">Details</Link>
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