import React, { useState, useEffect } from "react";
import { db } from "../../firebase";

const EditMentor = (props) => {
  const [selectedMentor, setSelectedMentor] = useState({});
  const { mentor } = props.match.params;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedMentor({ ...selectedMentor, [name]: value });
  };

  const setForm = async () => {
    const doc = await db.collection("mentors").doc(mentor).get();
    setSelectedMentor({ ...doc.data() });
  };
  useEffect(() => {
    setForm();
  }, []);
  const setMentor = async (selectedMentor) => {
    await db.collection("mentors").doc(mentor).update(selectedMentor);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setMentor(selectedMentor);
  };

  return (
    <div className="form">
      <form className="card card-body" onSubmit={handleSubmit}>
        <h5 className="">Edit a Mentor</h5>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">person</i>
          </div>
          <input
            placeholder="Name"
            name="title"
            type="text"
            className="form-control"
            id="title"
            onChange={handleInputChange}
            value={selectedMentor.title}
          />
        </div>
        <div className="form-group input-group">
          <textarea
            placeholder="Write a description"
            name="content"
            id="content"
            className="form-control"
            onChange={handleInputChange}
            value={selectedMentor.content}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success">Save</button>
        </div>
      </form>
    </div>
  );
};
export default EditMentor;
