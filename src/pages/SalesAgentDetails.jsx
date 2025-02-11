import { useContext } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useParams } from "react-router-dom";
import TrackerContext from "../contexts/TrackerContext";


const SalesAgentDetails = () => {

  const { agents } = useContext(TrackerContext);

  const {id} = useParams();

  // console.log(id);

  const agentDetails = agents.find((agent) => agent._id == id)

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
                <Link className="btn btn-primary" to="/sales/addSaleAgent" state={{agentValues: agentDetails}}>Edit Agent Details</Link>
              </div>
            </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default SalesAgentDetails;
