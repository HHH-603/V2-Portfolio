import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <Link className="navbar-link" to="/">Home</Link>
                <Link className="navbar-link" to="/about">About</Link>
                <Link className="navbar-link" to="/work">Work</Link>
                <Link className="navbar-link" to="#">Contact</Link>
            </div>
        </>
    );
};

export default Navbar;