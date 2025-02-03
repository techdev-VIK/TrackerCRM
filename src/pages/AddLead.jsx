import React, { useState } from "react";

const AddLead = () => {
  const [leadName, setLeadName] = useState("");
  const [leadSource, setLeadSource] = useState("");
  const [salesAgents, setSalesAgents] = useState([]);
  const [leadStatus, setLeadStatus] = useState("New");
  const [priority, setPriority] = useState("High");
  const [timeToClose, setTimeToClose] = useState("");
  const [tags, setTags] = useState([]);

  const availableAgents = ["John Doe", "Jane Smith", "Emily Brown"];
  const availableTags = ["Urgent", "Follow-up", "Potential"];
  const leadSources = ["Referral", "Website", "Social Media", "Cold Call"];
  const leadStatuses = ["New", "Contacted", "Qualified", "Closed"];
  const priorityLevels = ["High", "Medium", "Low"];

  const handleCreateLead = () => {
    if (!leadName.trim() || !leadSource.trim() || salesAgents.length === 0 || !timeToClose.trim()) {
      alert("Please fill out all required fields.");
      return;
    }
    console.log("New Lead Created:", { leadName, leadSource, salesAgents, leadStatus, priority, timeToClose, tags });
    alert("Lead Created Successfully!");
    // Reset form
    setLeadName("");
    setLeadSource("");
    setSalesAgents([]);
    setLeadStatus("New");
    setPriority("High");
    setTimeToClose("");
    setTags([]);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center p-3">
      <div className="card p-4 shadow" style={{ width: "500px" }}>
        <h4 className="text-center">Add New Lead</h4>

        <div className="mt-3">
          <label className="form-label">Lead Name:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter lead name"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label className="form-label">Lead Source:</label>
          <select className="form-select" value={leadSource} onChange={(e) => setLeadSource(e.target.value)}>
            <option value="">Select Source</option>
            {leadSources.map((source) => (
              <option key={source} value={source}>
                {source}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <label className="form-label">Sales Agent:</label>
          <select
            multiple
            className="form-select"
            value={salesAgents}
            onChange={(e) => setSalesAgents([...e.target.selectedOptions].map((opt) => opt.value))}
          >
            {availableAgents.map((agent) => (
              <option key={agent} value={agent}>
                {agent}
              </option>
            ))}
          </select>
          
        </div>

        <div className="mt-3">
          <label className="form-label">Lead Status:</label>
          <select className="form-select" value={leadStatus} onChange={(e) => setLeadStatus(e.target.value)}>
            {leadStatuses.map((status) => (
              <option key={status} value={status}>
                {status}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <label className="form-label">Priority:</label>
          <select className="form-select" value={priority} onChange={(e) => setPriority(e.target.value)}>
            {priorityLevels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-3">
          <label className="form-label">Time to Close (Days):</label>
          <input
            type="number"
            className="form-control"
            placeholder="Enter estimated time"
            value={timeToClose}
            onChange={(e) => setTimeToClose(e.target.value)}
          />
        </div>

        <div className="mt-3">
          <label className="form-label">Tags:</label>
          <select
            multiple
            className="form-select"
            value={tags}
            onChange={(e) => setTags([...e.target.selectedOptions].map((opt) => opt.value))}
          >
            {availableTags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
          
        </div>

        <button className="btn btn-primary mt-4 w-100" onClick={handleCreateLead}>
          Create Lead
        </button>
      </div>
    </div>
  );
};

export default AddLead;
