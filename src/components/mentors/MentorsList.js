import React, { useState, useEffect } from "react";
// import MentorsSummary from "./MentorsSummary";

import { db } from "../../firebase";
import { Link } from "react-router-dom";

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  const getLinks = async () => {
    await db.collection("mentors").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setMentors(docs);
    });
  };
  const onDeleteLink = async (id) => {
    if (window.confirm("Are you sure?")) {
      await db.collection("mentors").doc(id).delete();
      console.log("Mentor Deleted");
    }
  };

  useEffect(() => {
    getLinks();
  }, []);
  return (
    <div className="container">
      <div className="">
        {mentors.map((mentor) => (
          <div className="card justify-content-md-center ">
            <div className="card-body" key={mentor.id}>
              <div className="card-header">
                <h4>{mentor.title}</h4>
              </div>
              <p>{mentor.content}</p>
              <div className="">
                <Link
                  to={{ pathname: `/edit/${mentor.id}` }}
                  className="btn btn-success m-4"
                >
                  Update
                </Link>
                <button
                  className="btn btn-danger"
                  onClick={() => onDeleteLink(mentor.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MentorList;
