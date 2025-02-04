
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

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/lead" element={<LeadDetails />}/>
          <Route path="/lead/addLead" element={<AddLead />}/>
          <Route path="/reports" element={<ReportPage />} />
          <Route path="/sales" element={<SalesAgentManagement />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
