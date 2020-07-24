import React, { useState } from "react";

const CreateMentor = () => {
  const initialState = {
    title: "",
    content: "",
  };
  const [values, setValues] = useState(initialState);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <div className="form">
      <form className="card card-body" onSubmit={handleSubmit}>
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
          />
        </div>
        <div className="form-group input-group">
          <textarea
            placeholder="Write a description"
            name="content"
            id="content"
            className="form-control"
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-success">Create</button>
        </div>
      </form>
    </div>
  );
};
export default CreateMentor;
