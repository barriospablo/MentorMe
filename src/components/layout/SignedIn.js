import React from "react";
import { NavLink } from "react-router-dom";
import "firebase/auth";
import { useFirebaseApp, useUser } from "reactfire";
/**
 * @name SignedInLinks
 * @description this component display a list of links if user is logged else display another list
 */
const SignedInLinks = () => {
  const firebase = useFirebaseApp();
  const user = useUser();
  const logOut = async () => {
    await firebase.auth().signOut();
  };

  return (
    <ul className="navbar-nav">
      {user ? (
        <>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/create">
              New Mentor
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" to="/home">
              Mentor list
            </NavLink>
          </li>
          <li className="nav-item ">
            <NavLink className="nav-link" onClick={logOut} to="/">
              Log Out
            </NavLink>
          </li>
        </>
      ) : (
        <li className="nav-item ">
          <NavLink className="nav-link" to="/signIn">
            Log in
          </NavLink>
        </li>
      )}
    </ul>
  );
};

export default SignedInLinks;
