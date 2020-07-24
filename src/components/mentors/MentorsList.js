import React from "react";
import MentorsSummary from "./MentorsSummary";

const MentorList = () => {
  return (
    <div className="container">
      <div className="col justify-content-md-center">
        <MentorsSummary />
        <MentorsSummary />
        <MentorsSummary />
        <MentorsSummary />
      </div>
    </div>
  );
};

export default MentorList;
