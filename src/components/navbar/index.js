import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Navbar = () => {
    return (
        <>
            <div className="navbar">
                <h2 className="navbar-header">HHH</h2>
                <Link className="navbar-link" to="/contact">Contact</Link>
                <Link className="navbar-link" to="/work">Work</Link>
                <Link className="navbar-link" to="/about">About</Link>
                <Link className="navbar-link" to="/">Home</Link>
            </div>
        </>
    );
};

export default Navbar;