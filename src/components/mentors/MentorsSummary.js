import React from "react";
import { Link } from "react-router-dom";

const MentorsSummary = () => {
  return (
    <div className="justify-content-md-center">
      <div className="card">
        <div className=" mentor-summary">
          <div className="card-header">
            <Link to="/mentor/:id">
              <h2>Mentor title</h2>
            </Link>
            <div className="card-body">
              <p className="card-title">Posted by Pablinho</p>
            </div>
            <p className="card-footer text-muted">Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsSummary;
