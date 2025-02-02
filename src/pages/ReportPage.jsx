import React from 'react';

const ReportPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-2 bg-light p-3">
          <h4>Sidebar</h4>
          <ul className="list-unstyled">
            <li><a href="#">Back to Dashboard</a></li>
          </ul>
        </div>

        {/* Report Overview */}
        <div className="col-md-10 p-3">
          <h2>Anvaya CRM Reports</h2>
          <div className="mt-4">
            {/* Total Leads Closed and In Pipeline */}
            <div className="card mb-4">
              <div className="card-body">
                <h5>Total Leads Closed and In Pipeline</h5>
                {/* Insert Pie Chart component here */}
                <div style={{ height: '200px', backgroundColor: '#f4f4f4' }}>[Pie Chart]</div>
              </div>
            </div>

            {/* Leads Closed by Sales Agent */}
            <div className="card mb-4">
              <div className="card-body">
                <h5>Leads Closed by Sales Agent</h5>
                {/* Insert Bar Chart component here */}
                <div style={{ height: '200px', backgroundColor: '#f4f4f4' }}>[Bar Chart]</div>
              </div>
            </div>

            {/* Lead Status Distribution */}
            <div className="card mb-4">
              <div className="card-body">
                <h5>Lead Status Distribution</h5>
                {/* Insert Pie Chart or Bar Chart component here */}
                <div style={{ height: '200px', backgroundColor: '#f4f4f4' }}>[Pie Chart or Bar Chart]</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportPage;
