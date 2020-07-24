import React, { Component } from "react";
import MentorsList from "../mentors/MentorsList";

class Dashboard extends Component {
  render() {
    // console.log(this.props);
    const { mentors } = this.props;

    return (
      <div className=" container">
        <MentorsList mentors={mentors} />
      </div>
    );
  }
}

export default Dashboard;
