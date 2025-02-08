import React, { useContext, useState } from "react";
import Sidebar from "../components/Sidebar";
import { Link, useParams } from "react-router-dom";
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

  const leadDetails = leads.find((lead) => lead._id === id)

  // console.log(leadDetails);


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
                    <tr>
                      <th>Active Tags</th>
                      <td>{leadDetails.tags.map((tag) => <button key={tag.value} className="btn btn-sm btn-outline-primary me-2">{tag.label}</button>)}</td>
                    </tr>
                  </tbody>
                </table>
                <Link to="/lead/addLead" className="btn btn-primary" state={{leadValues: leadDetails}}>Edit Lead Details</Link>
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
