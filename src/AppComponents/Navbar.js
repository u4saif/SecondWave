import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light " style={{backgroundColor: "lightblue"}}>
        <a className="navbar-brand" to="#" style={{color: "#1a1a24",fontWeight:700}}>
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" to="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" to="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" to="#">
                Disabled
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
