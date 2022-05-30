import React, { useState } from "react";
import "../navbar/Navi.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faMagnifyingGlass,
  faBagShopping,
  faXmark,
  faHeart as farHeart,
} from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
function Navbaar() {
  return (
    <div>
      {/* <!-- Navbar --> */}
      {/* <!-- Navbar--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid mt-3 mb-3">
          <a href="#" className="navbar-brand">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav  active btn-tog">
                  <FontAwesomeIcon
                    style={{ color: "#000" }}
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    icon={faXmark}
                  />
                  <li className="nav-item active">
                    <a className="nav-link" href="#">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Link
                    </a>
                  </li>
                </ul>
              </div>
            </nav>
          </a>
          {/* <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarCollapse"
          > */}
          {/* <div className="navbar-nav"> */}
          <NavLink to={"/men"} className="nav-item nav-link active ">
            MEN
          </NavLink>
          <NavLink to={"/women"} className="nav-item nav-link ml-2">
            WOMEN
          </NavLink>
          <NavLink to={"/kurti"} className="nav-item nav-link ml-2">
            KURTI
          </NavLink>
          {/* </div> */}
          <form className="d-flex">
            <NavLink to="/">
              <img src={logo} className="logo" />
            </NavLink>
          </form>
          <div className="navbar-nav  icons">
            <a href="#" className="nav-item nav-link icon">
              <FontAwesomeIcon icon={faUser} className="user" />
              <FontAwesomeIcon icon={faMagnifyingGlass} className="glass" />
              <FontAwesomeIcon icon={faBagShopping} className="bag" />
            </a>
          </div>
        </div>
        {/* </div> */}
      </nav>
    </div>
  );
}

export default Navbaar;
