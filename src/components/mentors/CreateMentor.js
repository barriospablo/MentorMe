import React, { useState } from "react";
import { db } from "../../firebase";
/**
 * @name CreateMentor
 * @description Component with form to create a new mentor
 * @author pablo.barrios
 */
const CreateMentor = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    content: "",
    seniority: "",
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
      <fieldset className="form-group">
        <div className="form ">
          <form className="card card-body" onSubmit={AddOrEdditMentor}>
            <legend className="display-4 ">Create a new Mentor</legend>
            <div className="form-group input-group">
              <div className="input-group-text bg-light">
                <i className="material-icons">person</i>
              </div>
              <input
                placeholder="First Name"
                name="firstName"
                type="text"
                className="form-control"
                id="firstName"
                onChange={handleChange}
                value={values.firstName}
              />
            </div>
            <div className="form-group input-group">
              <div className="input-group-text bg-light">
                <i className="material-icons">person</i>
              </div>
              <input
                placeholder="Last Name"
                name="lastName"
                type="text"
                className="form-control"
                id="lastName"
                onChange={handleChange}
                value={values.lastName}
              />
            </div>
            <div className="form-group">
              <h4 className="display-4" htmlFor="exampleFormControlSelect1">
                Seniority
              </h4>
              <select
                className="form-control"
                name="seniority"
                onChange={handleChange}
                id="exampleFormControlSelect1"
              >
                <option>Jr</option>
                <option>Jr Adv</option>
                <option>Ssr</option>
                <option>Ssr Adv</option>
                <option>Sr</option>
              </select>
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
      </fieldset>
    </div>
  );
};
export default CreateMentor;
