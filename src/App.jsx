
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage'
import Footer from "./components/Footer";
import LeadDetails from "./pages/LeadDetails";
import ReportPage from "./pages/ReportPage";
import SalesAgentManagement from "./pages/SalesAgentManagement";
import AddLead from './pages/AddLead';
import Dashboard from './pages/Dashboard';
import TrackerContext, { sampleLeads } from './contexts/TrackerContext';
import AddSalesAgent from './pages/AddSalesAgent';

function App() {

  return (
    <>
    <TrackerContext.Provider value={{sampleLeads}}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/lead" element={<LeadDetails />}/>
          <Route path="/lead/addLead" element={<AddLead />}/>
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/sales" element={<SalesAgentManagement />}/>
          <Route path="/sales/addSaleAgent" element={<AddSalesAgent />}/>
        </Routes>
        <Footer />
      </Router>
      </TrackerContext.Provider>
    </>
  )
}

export default App
