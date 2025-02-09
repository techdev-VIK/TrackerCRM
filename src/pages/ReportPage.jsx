import React, {useContext } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from "chart.js";
import TrackerContext from "../contexts/TrackerContext";
import Sidebar from "../components/Sidebar";
import { Link } from "react-router-dom";

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);



const ReportPage = () => {
  const { sampleLeads:leads } = useContext(TrackerContext);

  
  const getTotalLeads = () => {
    const closedLeads = leads.filter((lead) => lead.status === "Closed").length;
    const pipelineLeads = leads.filter((lead) => lead.status !== "Closed").length;
    return {
      labels: ["Closed", "In Pipeline"],
      datasets: [
        {
          data: [closedLeads, pipelineLeads],
          backgroundColor: ["#36A2EB", "#FF6384"],
          hoverBackgroundColor: ["#36A2EB", "#FF6384"],
        },
      ],
    };
  };

  const getLeadsBySalesAgent = () => {
    const salesAgents = leads.reduce((acc, lead) => {
      const agent = lead.salesAgent;
      if (!acc[agent]) {
        acc[agent] = 0;
      }
      if (lead.status === "Closed") {
        acc[agent]++;
      }
      return acc;
    }, {});

    return {
      labels: Object.keys(salesAgents),
      datasets: [
        {
          label: "Leads Closed",
          data: Object.values(salesAgents),
          backgroundColor: "#42A5F5",
          borderColor: "#1E88E5",
          borderWidth: 1,
        },
      ],
    };
  };

  const getLeadStatusDistribution = () => {
    const statusCounts = leads.reduce((acc, lead) => {
      const status = lead.status;
      acc[status] = acc[status] ? acc[status] + 1 : 1;
      return acc;
    }, {});

    return {
      labels: Object.keys(statusCounts),
      datasets: [
        {
          data: Object.values(statusCounts),
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"],
        },
      ],
    };
  };

  return (
    <div className="d-flex" >
        <Sidebar />

        <div className="flex-grow-1 py-2 mx-3">

        <div className="d-flex justify-content-between">
        <h2 className="mb-0">Reports</h2>
          <Link to="/sales" className="btn btn-primary">
            Sales
          </Link>
        </div>
          
          <hr />
        
        {/* Pie Chart for Total Leads (Closed vs In Pipeline) */}

          <div className="mb-5">

          
          <div className="row d-flex justify-content-center align-content-center">
          <div className="col-md-6 mt-3 text-center">
          <div className="card">
          <h4>Total Leads (Closed vs In Pipeline)</h4>
          <Pie data={getTotalLeads()}/>
          </div>
          </div>
          </div>
          
        {/* Bar Chart for Leads Closed by Sales Agent */}

        <div className="row d-flex justify-content-center align-content-center">
        <div className="col-md-6 mt-3 text-center">
        <div className="card">
          <h4>Leads Closed by Sales Agent</h4>
          <Bar data={getLeadsBySalesAgent()} />
        </div>
        </div>
        </div>
        
        {/* Pie Chart for Lead Status Distribution */}

        <div className="row d-flex justify-content-center align-content-center">
        <div className="col-md-6 mt-3 text-center">
        <div className="card">
          <h4>Lead Status Distribution</h4>
          <Pie data={getLeadStatusDistribution()} />
        </div>
        </div>
        </div>
        
          </div>
          </div>

        </div>
        
  );
};

export default ReportPage;
