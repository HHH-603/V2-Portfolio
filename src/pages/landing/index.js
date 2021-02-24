import React from 'react';
import { Link } from 'react-router-dom';
import Wrapper from '../../components/wrapper';
import LandingContainer from '../../components/landing-container';

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
                <h1>{greeting()}</h1>
                <p>My name is Hank, and I'm a Web Developer based in <a className="anchor-link" href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina">Charlotte, NC</a>. I love designing, bulding, and implementing software solutions that create optimal user experiences and clarly convey the value of client goods and services.</p>
                <div className="landing-page-links-container">
                    <Link className="list-item-link" to="#">About</Link>
                    <Link className="list-item-link" to="#">Work</Link>
                    <Link className="list-item-link" to="#">Contact</Link>
                </div>
            </LandingContainer>
        </Wrapper>
    );
};

export default Landing;