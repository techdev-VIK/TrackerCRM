import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useNavigate, useParams } from "react-router-dom";
import TrackerContext from "../contexts/TrackerContext";
import AddNewTag from "../components/AddNewTag";
import axios from "axios";
import ReassignAgent from "../components/ReassignAgent";
import useAxios from "../hooks/useAxios";



const LeadDetails = () => {

  const backendUrl = "https://tracker-backend-alpha.vercel.app";


  const navigate = useNavigate();

  const { leads, fetchedLeadData } = useContext(TrackerContext);

  const {id} = useParams();

  const leadDetails = leads.find((lead) => lead._id === id)

  // console.log(leadDetails);

  const {data: comments, loading, error} = useAxios(`${backendUrl}/lead/${leadDetails._id}/readComments`)


  const [leadTags, setLeadTags] = useState(leadDetails.tags)

  const [showTagForm, setShowTagForm] = useState(false);

  const [agentReassign, setAgentReassign] = useState(false);


  const [newComment, setNewComment] = useState("");

  const [commentsList, setCommentsList] = useState([]);


  useEffect(() => {
    if(comments){
      setCommentsList(comments)
    }
  }, [comments])



  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(`${backendUrl}/lead/${leadDetails._id}/comment`, {
        author: leadDetails.salesAgent._id,
        commentText: newComment
      })

      if(response.status === 200){
        const newAddedComment = response.data;

        setCommentsList((prevComments) => [...prevComments, newAddedComment]);
        setNewComment("")
      }

    } catch (error) {
      console.error(error)
    }
  };

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
        fetchedLeadData()
        navigate('/lead')
      } else {
        console.error("Failed to reassign agent.");
      }
    } catch (error) {
      console.error(error);
    }
  };


  if (error) return <div className="alert alert-danger mt-5 text-center">[{error}]    Sorry, Records not available, please check later...</div>

  if (loading) return <div className='d-flex justify-content-center align-items-center' style={{ height: "100vh" }}><div className="spinner-border text-primary" style={{width: "5rem", height: "5rem"}} role="status">
  <span className="visually-hidden">Loading...</span>
</div></div>
  

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
                {commentsList && commentsList.slice().reverse().map((comment, index) => (
                  <li key={index} className="list-group-item">
                    <p><strong>{comment.author.name}</strong> - <small>{new Date(comment.createdAt).toLocaleString('en-US')}</small></p>
                    <p>{comment.commentText}</p>
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
