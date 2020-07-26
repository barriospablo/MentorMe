import React from "react";
import MentorsList from "../mentors/MentorsList";

const Dashboard = (props) => {
  const { mentors } = props;
  return (
    <div className=" container">
      <MentorsList mentors={mentors} />
    </div>
  );
};

export default Dashboard;
