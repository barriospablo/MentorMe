import React, { useState, useEffect } from "react";

import { db } from "../../firebase";
import { Link } from "react-router-dom";

/**
 * @name MentorList
 * @author pablo.barrios
 *  @description component responsible for rendering a list of mentors
 */

const MentorList = () => {
  const [mentors, setMentors] = useState([]);
  /**
   * @name getLinks
   *  @description function in charge of get and set an array of mentors from firebase
   *
   */
  const getLinks = async () => {
    await db.collection("mentors").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setMentors(docs);
    });
  };
  /**
   * @name onDeleteLink
   *  @description method responsible for delete an specific mentor given an id
   * @param {string} id
   */
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
