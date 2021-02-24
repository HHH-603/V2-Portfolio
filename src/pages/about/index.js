import React from 'react';
import Navbar from '../../components/navbar';
import ProfilePic from '../../images/profile-picture.png';
import './style.css';

const About = () => {
    return (
        <>
            <Navbar />
            <h1>Hello, world!</h1>
            <div className="profile-container">
                <img className="profile" src={ProfilePic} alt="profile"/>
            </div>
        </>
    );
};

export default About;