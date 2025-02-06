import React, { useState } from "react";
import Sidebar from "../components/Sidebar";



const LeadDetails = () => {
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
              <p><strong>Lead Name:</strong> Jane Doe</p>
              <p><strong>Sales Agent:</strong> John Doe</p>
              <p><strong>Lead Source:</strong> Referral</p>
              <p><strong>Lead Status:</strong> New</p>
              <p><strong>Priority:</strong> High</p>
              <p><strong>Time to Close:</strong> 30 Days</p>
              <button className="btn btn-primary">Edit Lead Details</button>
            </div>
          </div>

          {/* Comments Section */}
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
