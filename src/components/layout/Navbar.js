import React from "react";
import { Link } from "react-router-dom";
import SignedIn from "./SignedIn";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="">
        Pablinho
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <div className="row">
          <SignedIn />
          {/* <SignedOut /> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
