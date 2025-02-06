import { useState } from "react";
import Header from "../components/Header";


const AddLead = () => {
  const salesAgents = ["Agent1", "Agent2", "Agent3"];
  const [selectedOption] = useState(salesAgents);

  const [leadName, setLeadName] = useState('');

  const [leadSource, setLeadSource] = useState('');

  const [salesAgent, setSalesAgent] = useState('');

  const [leadStatus, setLeadStatus] = useState('');

  const [priority, setPriority] = useState('');

  const [timeToClose, setTimeToClose] = useState('');

  const [tags, setTags] = useState('');


  const formHandler = (e) => {
    e.preventDefault();


    const leadData = {
      name: leadName,
      source: leadSource,
      salesAgent: salesAgent,
      status: leadStatus,
      priority: priority,
      timeToClose: timeToClose,
      tags: tags
    }


  }

  return (
    <>
    <Header />
    <div className="d-flex justify-content-center align-items-center main-content my-5">
      <div className="card shadow p-4" style={{ maxWidth: "30rem", width: "100%" }}>
        <h3 className="text-center mb-3">Add New Lead</h3>
        <hr />

        <form onSubmit={formHandler}>
          <div className="mb-3">
            <label htmlFor="leadName" className="form-label">Lead Name:</label>
            <input type="text" id="leadName" className="form-control" onChange={(e) => setLeadName(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="source" className="form-label">Lead Source:</label>
            <select id="source" className="form-select" onChange={(e) => setLeadSource(e.target.value)} required >
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Cold Call">Cold Call</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Email">Email</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="salesAgent" className="form-label">Sales Agent:</label>
            <select id="salesAgent" className="form-select" onChange={(e) => setSalesAgent(e.target.value)} required>
              {selectedOption.map((agent, index) => (
                <option key={index} value={agent}>{agent}</option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="leadStatus" className="form-label">Lead Status</label>
            <select id="leadStatus" className="form-select" onChange={(e) => setLeadStatus(e.target.value)} required>
               <option value="New">New</option>
               <option value="Contacted">Contacted</option>
               <option value="Qualified">Qualified</option>
               <option value="Proposal Sent">Proposal Sent</option>
               <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority</label>
            <select id="priority" className="form-select" onChange={(e) => setPriority(e.target.value)} required>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="timeToClose" className="form-label">Time To Close</label>
            <input type="number" className="form-control" onChange={(e) => setTimeToClose(e.target.value)} required/>
          </div>

          <div className="mb-3">
            <label htmlFor="tags" className="form-label">Tags</label>
            <select id="tags" className="form-select" onChange={(e) => setTags(e.target.value)}>
               <option value="High Value">High Value</option>
               <option value="Follow Up">Follow Up</option>
               <option value="Complete">Complete</option>
            </select>
          </div>
            
            <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary">Add Lead</button>
            </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddLead;
