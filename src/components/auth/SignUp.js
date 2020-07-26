import React, { useState } from "react";

const SignUp = () => {
  const initialState = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
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
        <h1 className="">Sign Up</h1>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">email</i>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control"
            aria-describedby="emailHelp"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">lock</i>
          </div>
          <input
            name="password"
            placeholder="Password"
            type="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>

        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">person</i>
          </div>
          <input
            placeholder="First Name"
            className="form-control"
            type="text"
            name="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">perm_identity</i>
          </div>
          <input
            placeholder="Last Name"
            className="form-control"
            name="lastName"
            type="text"
            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn btn-success">Sign Up</button>
        </div>
      </form>
    </div>
  );
};
export default SignUp;
