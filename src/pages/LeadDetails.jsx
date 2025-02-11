import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrackerContext from "../contexts/TrackerContext";
import AddNewTag from "../components/AddNewTag";
import axios from "axios";
import ReassignAgent from "../components/ReassignAgent";



const LeadDetails = () => {

  const backendUrl = "http://localhost:3000";

  const navigate = useNavigate();

  const { leads } = useContext(TrackerContext);

  const [showTagForm, setShowTagForm] = useState(false);

  const [agentReassign, setAgentReassign] = useState(false);

  const {id} = useParams();

  const [comments, setComments] = useState([
    { author: "John Doe", date: "2025-01-31 10:00 AM", text: "Reached out, waiting..." },
  ]);

  const [newComment, setNewComment] = useState("");



  const handleCommentSubmit = () => {
    if (newComment.trim() === "") return;
    const newEntry = {
      author: "You",
      date: new Date().toLocaleString(),
      text: newComment,
    };
    setComments([...comments, newEntry]);
    setNewComment("");
  };

  const leadDetails = leads.find((lead) => lead._id === id)

  // console.log(leadDetails);


  const [leadTags, setLeadTags] = useState(leadDetails.tags)

  const handleAddTag = async (newTag) => {

    try {
       const response = await axios.put(`${backendUrl}/lead/${leadDetails._id}/tag/addNew`, {
        tag: newTag
       })

       if(response.status === 200){
        setLeadTags((prevTags) => [...prevTags, newTag]);
        setShowTagForm(false);
       }else{
        console.error("Failed to add tag.");
       }

    } catch (error) {
      console.error(error);
    }
    
  }



  const deleteLeadHandler = async() => {

      try {
        const response = await axios.delete(`${backendUrl}/delete/lead/${leadDetails._id}`)

        if (response.status === 200) {
          navigate('/lead')
        } else {
          console.error("Failed to delete.");
        }
      } catch (error) {
        console.error("Failed to delete.", error);
      }
  }


  const salesAgentEditHandler = async (newAgentId) => {
    try {
      const response = await axios.post(`${backendUrl}/lead/edit/${leadDetails._id}/agent/reassign`, {
        salesAgent: newAgentId,   // Sending agent ID
      });
  
      if (response.status === 200) {
        setAgentReassign(false);
        navigate('/lead')
      } else {
        console.error("Failed to reassign agent.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  

  return (


        <div className="d-flex">
       
        <Sidebar />

        <div className="py-2 mx-3 flex-grow-1">
        <div className="d-flex justify-content-between">
        <h2 className="mb-0">Lead Details</h2>
        <Link to="/lead/addLead" className="btn btn-primary">
            + Add Lead
        </Link>
        </div>
          
          <hr />

          {/* Lead Information */}
          <div className="row mb-5">
          <div className="col-md-12">
            <div className="card mt-3">
              <div className="card-body">
                <table className="table table-bordered table-hover">
                  <tbody>
                    <tr>
                      <th>Lead Name</th>
                      <td>{leadDetails.name}</td>
                    </tr>
                    <tr>
                      <th>Sales Agent</th>
                      <td>{leadDetails.salesAgent.name} <span className="bi bi-pencil-square text-primary ms-3" onClick={() => setAgentReassign(true)}></span>{agentReassign && <ReassignAgent onAddAgent={salesAgentEditHandler} onClose={() => setAgentReassign(false)} leadId = {leadDetails._id}/>}</td>
                    </tr>
                    <tr>
                      <th>Lead Source</th>
                      <td>{leadDetails.source}</td>
                    </tr>
                    <tr>
                      <th>Lead Status</th>
                      <td>{leadDetails.status}</td>
                    </tr>
                    <tr>
                      <th>Priority</th>
                      <td>{leadDetails.priority}</td>
                    </tr>
                    <tr>
                      <th>Time to Close</th>
                      <td>{leadDetails.timeToClose} Days</td>
                    </tr>
                    <tr>
                      <th>Active Tags</th>
                      <td>{leadTags.map((tag) => <button key={tag} className="btn btn-sm btn-outline-primary me-2">{tag}</button>)}{leadTags.length <5 && <button className="btn btn-sm btn-outline-success" onClick={() => setShowTagForm(true)}>+ Add new Tag</button>}{showTagForm && <AddNewTag onAddTag={handleAddTag} onClose={() => setShowTagForm(false)}/>}</td>
                    </tr>
                  </tbody>
                </table>
                
                <div className="d-flex justify-content-between">
                <Link to="/lead/addLead" className="btn btn-primary" state={{leadValues: leadDetails}}>Edit Lead Details</Link>

                <button className="btn btn-danger" onClick={deleteLeadHandler}>Delete Lead</button>
                </div>
                
              </div>
            </div>
          </div>
            

          {/* Comments Section */}
          <div className="col-md-12">
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Comments:</h5>

              {/* Add Comment */}
              <div className="mb-3">
                <textarea
                  type="text"
                  rows="3"
                  className="form-control"
                  placeholder="Add a new comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                ></textarea>
                <button className="btn btn-sm btn-success mt-2 " onClick={handleCommentSubmit}>
                  Add Comment
                </button>
              </div>

              <ul className="list-group mt-3">
                {comments.slice().reverse().map((comment, index) => (
                  <li key={index} className="list-group-item">
                    <p><strong>{comment.author}</strong> - <small>{comment.date}</small></p>
                    <p>{comment.text}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          </div>
          </div>
          </div>
          </div>
  );
};

export default LeadDetails;
