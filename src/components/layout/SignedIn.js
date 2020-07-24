import React from "react";
import { NavLink } from "react-router-dom";

const SignedInLinks = () => {
  return (
    <ul className="navbar-nav">
      {/* <li className="nav-item ">
        <NavLink className="nav-link" to="/">
          Logo
        </NavLink>
      </li> */}
      <li className="nav-item ">
        <NavLink className="nav-link" to="/create">
          New Mentor
        </NavLink>
      </li>
      <li className="nav-item ">
        <NavLink className="nav-link" to="/">
          Log Out
        </NavLink>
      </li>
    </ul>
  );
};

export default SignedInLinks;
