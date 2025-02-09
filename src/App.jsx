
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage'
import Footer from "./components/Footer";
import LeadDetails from "./pages/LeadDetails";
import ReportPage from "./pages/ReportPage";
import AddLead from './pages/AddLead';
import Dashboard from './pages/Dashboard';
import TrackerContext, { sampleLeads, tagOptions } from './contexts/TrackerContext';
import AddSalesAgent from './pages/AddSalesAgent';
import LeadList from './pages/LeadList';
import SalesAgentList from './pages/SalesAgentList';
import SalesAgentDetails from './pages/SalesAgentDetails';
import SalesData from './pages/SalesData';

function App() {

  return (
    <>
    <TrackerContext.Provider value={{sampleLeads, tagOptions}}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/lead" element={<LeadList />}/>
          <Route path="/lead/details/:id" element={<LeadDetails />}/>
          <Route path="/lead/addLead" element={<AddLead />}/>
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/salesAgents" element={<SalesAgentList />}/>
          <Route path="/salesAgents/details/:id" element={<SalesAgentDetails />}/>
          <Route path="/sales/addSaleAgent" element={<AddSalesAgent />}/>
          <Route path="/sales" element={<SalesData />}/>
        </Routes>
        <Footer />
      </Router>
      </TrackerContext.Provider>
    </>
  )
}

export default App
