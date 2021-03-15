import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  const [sansToggle, withToggle] = useState(true);
  const [menubar, tiltMenubar] = useState(true);

  const handleToggle = () => {
    withToggle(!sansToggle);
  };

  const handleTilt = () => {
    tiltMenubar(!menubar);
  };

  return (
    <>
      <div className="navbar">
        <div className="menu-icon" onClick={handleToggle}>
          <div
            className="menu-bar"
            // className={menubar ? "menu-bar" : "menu-bar-tilt"}
            // onClick={handleTilt}
          ></div>
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
