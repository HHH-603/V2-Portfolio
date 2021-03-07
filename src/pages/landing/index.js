import React from 'react';
import { Link } from 'react-router-dom';
import LandingContainer from '../../components/landing-container';
import Navbar from '../../components/navbar';
import Wrapper from '../../components/wrapper';

import './style.css';

var greeting = () => {
    let today = new Date();
    let hoursNow = today.getHours();

    if (hoursNow > 18) {
        return "Good evening!";
    } else if (hoursNow > 12) {
        return "Good afternoon!";
    } else if (hoursNow > 0) {
        return "Good morning!";
    } else {
        return "Greetings!"
    }
}

const Landing = () => {
    return (
        <Wrapper>
            <LandingContainer>
                <h1 className="greeting">{greeting()}</h1>
                <p className="landing-paragraph">My name is <a className="anchor-link" href="https://www.linkedin.com/in/henryhamiltonholmes/">Hank</a>, and I'm a Web Developer based in <a className="anchor-link" href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina">Charlotte, NC</a>. I have a passion for creating MERN web applications with thoughtful and intuitive designs.</p>
                <div className="landing-page-links-container">
                    <Link className="landing-page-link" to="/about">About</Link>
                    <Link className="landing-page-link" to="#">Work</Link>
                    <Link className="landing-page-link" to="#">Contact</Link>
                </div>
            </LandingContainer>
        </Wrapper>
    );
};

export default Landing;