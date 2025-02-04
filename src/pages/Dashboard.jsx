import { NavLink } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {
  return (
    <>
      
      <div className="d-flex">
   
      <Sidebar />


      <div className="main-content">
      <main className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4>$40,000</h4>
                <small>
                  <span className="text-success">+15.69%</span> from last month
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4>$30,000</h4>
                <small>
                  <span className="text-danger">+15.69%</span> from last month
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4>$70,580</h4>
                <small>
                  <span className="text-success">+14.69%</span> from last month
                </small>
              </div>
            </div>
          </div>

          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <h4>$120,000</h4>
                <small>
                  <span className="text-success">+45.69%</span> from last month
                </small>
              </div>
            </div>
          </div>
        </div>
      </main>
      </div>
      </div>
    </>
  );
};

export default Dashboard;
