import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { useParams } from "react-router-dom";
import TrackerContext from "../contexts/TrackerContext";



const LeadDetails = () => {

  const { sampleLeads:leads } = useContext(TrackerContext);


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

  const leadDetails = leads.find((lead, index) => lead._id === id)

  console.log(leadDetails);


  return (


        <div className="d-flex">
       
        <Sidebar />

        <div className="py-2 mx-3 flex-grow-1">
        <div className="d-flex justify-content-between">
        <h2 className="mb-0">Lead Details</h2>
          <button className="btn btn-primary">
            Logout
          </button>
        </div>
          
          <hr />

          {/* Lead Information */}
          <div className="row">
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
                      <td>{leadDetails.salesAgent}</td>
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
                  </tbody>
                </table>
                <button className="btn btn-primary">Edit Lead Details</button>
              </div>
            </div>
          </div>
            

          {/* Comments Section */}
          <div className="col-md-12">
          <div className="card mt-3">
            <div className="card-body">
              <h5 className="card-title">Comments</h5>
              <ul className="list-group">
                {comments.map((comment, index) => (
                  <li key={index} className="list-group-item">
                    <p><strong>{comment.author}</strong> - <small>{comment.date}</small></p>
                    <p>{comment.text}</p>
                  </li>
                ))}
              </ul>
              {/* Add Comment */}
              <div className="mt-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Add a new comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <button className="btn btn-success mt-2" onClick={handleCommentSubmit}>
                  Submit Comment
                </button>
              </div>
            </div>
          </div>
            </div>
          </div>
          </div>
          </div>
  );
};

export default LeadDetails;
