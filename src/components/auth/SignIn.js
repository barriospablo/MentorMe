import React, { useState } from "react";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
import { Link, Redirect } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebaseApp();
  const user = useUser();
  const saveEmail = (e) => {
    setEmail(e.target.value);
  };
  const savePassword = (e) => {
    setPassword(e.target.value);
  };
  const submit = async () => {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
  };

  const logIn = async () => {
    await firebase.auth().signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="form">
      {user ? (
        <Redirect
          to={{
            pathname: "/home",
          }}
        />
      ) : (
        <div>
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
              onChange={saveEmail}
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
              onChange={savePassword}
            />
          </div>
          <div>
            <button onClick={submit} className="btn mx-4 btn-success">
              CreateAcount
            </button>
            <button onClick={logIn} className="btn btn-success">
              SignIn
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default SignIn;
