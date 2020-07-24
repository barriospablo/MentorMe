import React from "react";

const MentorDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section mentor-details">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">Mentor title - {id}</h2>
          <div className="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Et labore
              quaerat quibusdam vel saepe, ab voluptate accusantium culpa nemo
              fuga earum? Soluta amet nobis officia sed neque fuga aperiam quia?
            </p>
          </div>
        </div>
        <div className="card-footer">
          <div>Posted by Pablinho</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
