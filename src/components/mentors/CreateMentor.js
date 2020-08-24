import React, { useState } from "react";
import { db } from "../../firebase";
/**
 * @name CreateMentor
 * @description Component with form to create a new mentor
 * @author pablo.barrios
 */
const CreateMentor = () => {
  const initialState = {
    title: "",
    content: "",
  };
  const [values, setValues] = useState(initialState);

  /**
   *
   * @param {Object} mentorObject
   * @name addMentor
   * @description method in charge of push a new mentor in firebase and reset form after add a mentor
   */
  const addMentor = async (mentorObject) => {
    await db.collection("mentors").doc().set(mentorObject);
    window.alert("Mentor added");
    setValues({ ...initialState });
  };
  /**
   *
   * @param {*} e
   * @name handleChange
   * @description set values from the form in the state
   */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const AddOrEdditMentor = async (e) => {
    e.preventDefault();
    addMentor(values);
  };

  return (
    <div className="container col-sm-4">
      <div className="form ">
        <form className="card card-body" onSubmit={AddOrEdditMentor}>
          <h5 className="">Create a new Mentor</h5>
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
              onChange={handleChange}
              value={values.title}
            />
          </div>
          <div className="form-group input-group">
            <textarea
              placeholder="Write a description"
              name="content"
              id="content"
              className="form-control"
              onChange={handleChange}
              value={values.content}
            ></textarea>
          </div>
          <div>
            <button className="btn btn-success">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateMentor;
