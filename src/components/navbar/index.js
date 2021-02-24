import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar-container">
                <h3>Hank Holmes</h3>
                <Link className="navbar-link" to="/">About</Link>
                <Link className="navbar-link" to="#">Work</Link>
                <Link className="navbar-link" to="#">Contact</Link>
            </div>
            <div className="dropdown-menu">
                <Link className="dropdown-link" to="/">About</Link>
                <Link className="dropdown-link" to="#">Work</Link>
                <Link className="dropdown-link" to="#">Contact</Link>

            </div>
        </>
    );
};

export default Navbar;