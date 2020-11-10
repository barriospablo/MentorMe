import React from "react";
import MentorsList from "../mentors/MentorsList";
/**
 * @name Dashboard
 * @description component tha display a list of mentors
 * @author pablo.barrios
 */
const Dashboard = () => {
  return (
    <div className="container col-sm-4">
      <div className="justify-content-center">
        <h1 className="display-1">MentorMe</h1>
        <MentorsList />
      </div>
    </div>
  );
};

export default Dashboard;
