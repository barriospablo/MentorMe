import React from "react";
import { NavLink } from "react-router-dom";

const SignedOutLinks = () => {
  return (
    <ul className="navbar-nav">
      {/* <li className="nav-item">
        <NavLink className="nav-link" to="/signup">
          Sign Up
        </NavLink>
      </li> */}
      <li className="nav-item">
        <NavLink className="nav-link" to="/signin">
          Log In
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
