
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from './pages/HomePage'
import Header from "./components/Header";
import Footer from "./components/Footer";
import LeadDetails from "./pages/LeadDetails";
import ReportPage from "./pages/ReportPage";
import SalesAgentManagement from "./pages/SalesAgentManagement";

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lead" element={<LeadDetails />}/>
          <Route path="/report" element={<ReportPage />} />
          <Route path="/sales" element={<SalesAgentManagement />}/>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
