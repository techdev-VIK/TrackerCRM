import { useContext, useState } from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import Select from 'react-select';
import TrackerContext from "../contexts/TrackerContext";
import axios from "axios";


const AddLead = () => {

  const location = useLocation();

  const backendUrl = "http://localhost:3000";

  const { tagOptions, agents } = useContext(TrackerContext);


  const leadValues = location.state?.leadValues;

  const [leadName, setLeadName] = useState(leadValues?.name || '');

  const [leadSource, setLeadSource] = useState(leadValues?.source || 'Website');

  const [salesAgent, setSalesAgent] = useState('');

  const [leadStatus, setLeadStatus] = useState(leadValues?.status || 'New');

  const [priority, setPriority] = useState(leadValues?.priority || 'Medium');

  const [budget, setBudget] = useState(leadValues?.budget || '')

  const [timeToClose, setTimeToClose] = useState(leadValues?.timeToClose || '');


  const [tags, setTags] = useState([]);


  
  const multipleTagHandler = (selectedTag) => {

    setTags(selectedTag);

  }



  const formHandler = async (e) => {
    e.preventDefault();


    const leadData = {
      name: leadName,
      source: leadSource,
      salesAgent: salesAgent,
      status: leadStatus,
      priority: priority,
      timeToClose: Number(timeToClose),
      budget: Number(budget),
      tags: tags.map(tag => tag.value)
    }


    try {
      const response = await axios.post(`${backendUrl}/leads`, leadData)

      if(response.status === 200){
        setLeadName('');
        setLeadSource('Website');
        setSalesAgent('');
        setLeadStatus('New');    
        setPriority('Medium'); 
        setBudget('');
        setTimeToClose('');
        setTags([]);
      }
    } catch (error) {
      console.error(error);
    }

  }

  return (
    <>
    <Header />
    <div className="d-flex justify-content-center align-items-center main-content my-5">
      <div className="card shadow p-4" style={{ maxWidth: "30rem", width: "100%" }}>
        <h3 className="text-center mb-3">{leadValues ? "Update" :"Add New"} Lead</h3>
        <hr />

        <form onSubmit={formHandler}>
          <div className="mb-3">
            <label htmlFor="leadName" className="form-label">Lead Name:</label>
            <input type="text" id="leadName" value={leadName} className="form-control" onChange={(e) => setLeadName(e.target.value)} required />
          </div>

          <div className="mb-3">
            <label htmlFor="source" className="form-label">Lead Source:</label>
            <select id="source" className="form-select" value={leadSource}  onChange={(e) => setLeadSource(e.target.value)} required >
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Cold Call">Cold Call</option>
              <option value="Advertisement">Advertisement</option>
              <option value="Email">Email</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {!leadValues && <div className="mb-3">
            <label htmlFor="tags" className="form-label">Tags:</label>
            <Select 
            options={tagOptions} 
            value={tags}
            onChange={(selectedTag) => multipleTagHandler(selectedTag)}
            isMulti={true}
            />
          </div>}

          {!leadValues && <div className="mb-3">
            <label htmlFor="salesAgent" className="form-label">Sales Agent:</label>
            <select id="salesAgent" className="form-select" value={salesAgent}  onChange={(e) => setSalesAgent(e.target.value)} required>
              <option value="" disabled>-- Select Agent --</option>
              {agents.map((agent) => (
                <option key={agent._id} value={agent._id}>{agent.name}</option>
              ))}
            </select>
          </div>}


          <div className="mb-3">
            <label htmlFor="leadStatus" className="form-label">Lead Status:</label>
            <select id="leadStatus" value={leadStatus} className="form-select" onChange={(e) => setLeadStatus(e.target.value)} required>
               <option value="New">New</option>
               <option value="Contacted">Contacted</option>
               <option value="Qualified">Qualified</option>
               <option value="Proposal Sent">Proposal Sent</option>
               <option value="Closed">Closed</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="priority" className="form-label">Priority:</label>
            <select id="priority" value={priority} className="form-select" onChange={(e) => setPriority(e.target.value)} required>
               <option value="High">High</option>
               <option value="Medium">Medium</option>
               <option value="Low">Low</option>
            </select>
          </div>


          <div className="mb-3">
            <label htmlFor="budget" className="form-label">Budget:</label>
            <input type="number" id="budget" value={budget} className="form-control" onChange={(e) => setBudget(e.target.value)} min={5000} required/>
          </div>



          <div className="mb-3">
            <label htmlFor="timeToClose" className="form-label">Time To Close:</label>
            <input type="number" id="timeToClose" value={timeToClose} className="form-control" onChange={(e) => setTimeToClose(e.target.value)} min={1} required/>
          </div>
            
            <div className="mb-3 text-center">
            <button type="submit" className="btn btn-primary">{leadValues ? "Update" : "Add"} Lead</button>
            </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default AddLead;
