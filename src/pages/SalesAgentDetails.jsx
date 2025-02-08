import Sidebar from "../components/Sidebar";
import { Link, useParams } from "react-router-dom";
import { agents } from "./SalesAgentList";


const SalesAgentDetails = () => {


  const {id} = useParams();

  // console.log(id);

  const agentDetails = agents.find((agent) => agent.id == id)

  // console.log(agentDetails);


  return (


        <div className="d-flex">
       
        <Sidebar />

        <div className="py-2 mx-3 flex-grow-1">
        <div className="d-flex justify-content-between">
        <h2 className="mb-0">Agent Details</h2>
          <Link to="/sales/addSaleAgent" className="btn btn-primary">
            + Add Agent
          </Link>
        </div>
          
          <hr />

          {/* Lead Information */}
          <div className="row">
          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-body">
                <table className="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <th>Agent Name</th>
                      <td>{agentDetails.name}</td>
                    </tr>
                    <tr>
                      <th>Agent Email</th>
                      <td>{agentDetails.email}</td>
                    </tr>
                  </tbody>
                </table>
                <button className="btn btn-primary">Edit Agent Details</button>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default SalesAgentDetails;
