import React, { useState } from "react";

const SignIn = () => {
  const initialState = {
    email: "",
    password: "",
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
        <h1 className="">Sign in</h1>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">email</i>
          </div>
          <input
            placeholder="Email"
            type="email"
            name="email"
            className="form-control"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="form-group input-group">
          <div className="input-group-text bg-light">
            <i className="material-icons">lock</i>
          </div>
          <input
            placeholder="Password"
            name="password"
            type="password"
            className="form-control"
            id="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <button className="btn btn-success">Login</button>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
