import React from "react";
import MentorsList from "../mentors/MentorsList";

const Dashboard = () => {
  return (
    <div className="container col-sm-4">
      <div className="justify-content-center">
        <MentorsList />
      </div>
    </div>
  );
};

export default Dashboard;
