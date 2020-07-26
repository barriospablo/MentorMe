import React,  from "react";
import MentorsList from "../mentors/MentorsList";

const Dashboard = () => {
  // console.log(this.props);
  const { mentors } = this.props;

  return (
    <div className=" container">
      <MentorsList mentors={mentors} />
    </div>
  );
};

export default Dashboard;
