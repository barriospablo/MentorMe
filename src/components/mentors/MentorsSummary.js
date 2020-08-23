import React from "react";

const MentorsSummary = (props) => {
  const { mentor } = props;
  return (
    <div className="justify-content-md-center">
      <div className="card">
        <div className=" mentor-summary">
          <div className="card-header">
            <div className="card-body">
              <p className="card-title">{mentor.title}</p>
            </div>
            <p className="card-footer text-muted">{mentor.content}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MentorsSummary;
