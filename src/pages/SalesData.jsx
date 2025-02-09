

import { useContext, useState } from "react";
import Sidebar from "../components/Sidebar"
import TrackerContext from "../contexts/TrackerContext";
import { Link } from "react-router-dom";


const SalesData = () => {

    const { sampleLeads:leads } = useContext(TrackerContext);


    const [searchLead, setSearchLead] = useState('')


    const [sortBy, setSortBy] = useState('');

    const filteredLeads = leads.filter((lead) => lead.name.toLowerCase().includes(searchLead.toLowerCase()));

    if(sortBy === "High to Low"){
        filteredLeads.sort((a,b) => b.budget - a.budget)
    }else if(sortBy === "Low to High"){
        filteredLeads.sort((a,b) => a.budget - b.budget)
    }else{
        filteredLeads;
    }
    


    return(
        <>
        
          <div className="d-flex">
            <Sidebar />

            <div className="py-2 mx-3 flex-grow-1">
               
            <div className="d-flex justify-content-between">
            <h2 className="mb-0">Sales Overview</h2>
            <Link to="/reports" className="btn btn-primary">
                Reports
            </Link>
            </div>

            <hr />

            <div className="row mt-3 mx-3">

            <div className="col-md-12 d-flex justify-content-between mb-3">

            <div>
                <input type="search"
                placeholder="Search by lead..." className="form-control w-100" value={searchLead} onChange={(e) => setSearchLead(e.target.value)}/>
            </div>

            <div>
                <select className="form-select" onChange={(e) => setSortBy(e.target.value)}>
                    <option value="">Sort By Budget</option>
                    <option value="High to Low">High to Low</option>
                    <option value="Low to High">Low to High</option>
                </select>
            </div>
            </div>


            
            <div className="col-md-12 mb-5">
                <div className="row">

                    {filteredLeads.map((lead) => {

                    const name = lead.name;

                    const searchText = searchLead.toLowerCase();

                    const index = name.toLowerCase().indexOf(searchText);


                        const beforeMatch = name.substring(0,index);

                        const matchText = name.substring(index, index + searchLead.length);

                        const afterMatch = name.substring(index + searchLead.length)


                    return(
                            <div className="col-md-4 mt-2" key={lead._id}>
                            <div className="card p-2">
                            <div className="card-title">
                                <h4>{beforeMatch}{matchText}{afterMatch}</h4>
                                
                            </div>
                            <div className="card-body p-2">
                                <h5 className="mb-3">Budget: <span className="text-success">$ {lead.budget}</span></h5>
                                <div className="mb-3">Time To Close: <span className="text-danger">{lead.timeToClose}</span></div>
                                <div >
                                Sales Agent   
                                <span className="ms-2 text-primary">{lead.salesAgent}</span> 
                                </div>
                            </div>
                            </div>
                            </div>
                    )
                    }
                    )}
            </div>
            </div>
            </div>

          </div>
          </div>

        </>
    )
}

export default SalesData;