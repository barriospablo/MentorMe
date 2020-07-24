import React, { Component } from "react";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
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
          <h1 className="">Sign in</h1>
          <div className="form-group input-group">
            <div className="input-group-text bg-light">
              <i className="material-icons">email</i>
            </div>
            <input
              placeholder="Email"
              type="email"
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
          <div>
            <button className="btn btn-success">Login</button>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;
