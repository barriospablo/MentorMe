import React, { Component } from "react";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="form">
        <form className="card card-body" onSubmit={this.handleSubmit}>
          <h1 className="">Sign Up</h1>
          <div className="form-group input-group">
            <div className="input-group-text bg-light">
              <i className="material-icons">email</i>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              id="email"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-text bg-light">
              <i className="material-icons">lock</i>
            </div>
            <input
              placeholder="Password"
              type="password"
              className="form-control"
              id="password"
              onChange={this.handleChange}
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
              id="firstName"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group input-group">
            <div className="input-group-text bg-light">
              <i className="material-icons">perm_identity</i>
            </div>
            <input
              placeholder="Last Name"
              className="form-control"
              type="text"
              id="lastName"
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button className="btn btn-success">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUp;
