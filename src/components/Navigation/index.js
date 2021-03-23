import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [sansToggle, withToggle] = useState(true);
  const [menubar, tiltMenubar] = useState(true);

  function handleToggle() {
    withToggle(!sansToggle);
  }

  function handleTilt() {
    tiltMenubar(!menubar);
  }

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-header-container">
          <Link className="navbar-header-link" to="/">
            HHH
          </Link>
        </div>
        <div className="navbar">
          <div className="menu-icon">
            <div
              className={menubar ? "menu-bar" : "menu-bar-tilt"}
              onClick={() => {
                handleToggle();
                handleTilt();
              }}
            ></div>
          </div>
        </div>
      </div>
      <div className={sansToggle ? "dropdown-menu-hidden" : "dropdown-menu"}>
        <Link className="navbar-link" to="/">
          Home
        </Link>
        <Link className="navbar-link" to="/about">
          About
        </Link>
        <Link className="navbar-link" to="/projects">
          Projects
        </Link>
        <Link className="navbar-link" to="/contact">
          Contact
        </Link>
      </div>
    </>
  );
};

export default Navbar;
