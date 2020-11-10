import React, { useState } from "react";
import { useEffect } from "react";
import { db } from "../../firebase";
/**
 * @name MentorDetails
 * @description this component display a card with mentor details
 * @param {String} props
 * @author pablo.barrios
 */

const MentorDetails = (props) => {
  const [mentorDetails, setMentorDetail] = useState({});
  const id = props.match.params.id;

  const setDetails = async () => {
    const doc = await db.collection("mentors").doc(id).get();
    setMentorDetail({ ...doc.data() });
  };
  useEffect(() => {
    setDetails();
  }, []);
  return (
    <div className="container mt-4  section mentor-details">
      <div className="card">
        <div className="card-content">
          <h2 className="card-title">{mentorDetails.firstName}</h2>
          <div className="card-body">
            <p>{mentorDetails.content}</p>
          </div>
        </div>
        <div className="card-footer">
          <div>{mentorDetails.seniority}</div>
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default MentorDetails;
