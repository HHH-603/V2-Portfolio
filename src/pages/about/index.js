import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import ProfilePic from '../../images/profile-picture.png';
import './style.css';

const About = () => {
    return (
        <>
            <Navbar />
            <h1>Hello, world!</h1>
            <div className="page-wrapper">
                <div className="profile-container">
                    <img className="profile" src={ProfilePic} alt="profile" />
                </div>
            </div>
            <div className="row">
                <div className="about-container">
                    <p>
                        I'm originally from <a className="about-link" href="https://en.wikipedia.org/wiki/Dunbarton,_New_Hampshire">Dunbarton, NH</a>, and recently earned my Full Stack Web Development certification from <a className="about-link" href="https://en.wikipedia.org/wiki/University_of_North_Carolina_at_Charlotte">UNC Charlotte Continuing Education</a> (class of 2021). I previously worked at EveryAction in Washington, DC, where I helped equip mid-sized nonprofits with unified software solutions tailored to their fundraising and advocacy goals.
                    </p>
                    <br />
                    <p>
                        When I'm not in front of my computer, I enjoy <a className="about-link" href="https://www.alltrails.com/us/north-carolina">hiking</a>, working on my cooking skills, rooting for <a className="about-link" href="https://en.wikipedia.org/wiki/Boston_Celtics">the NBA's greatest franchise</a>, and exploring the Queen City's <a className="about-link" href="https://www.tripadvisor.com/Attractions-g49022-Activities-c36-t133-Charlotte_North_Carolina.html">outstanding craft breweries</a>.
                    </p>
                </div>
                <div className="about-container">
                    <p>Some languages, libraries, and databases I've recently been working with are:</p>
                    <ul className="skill-list">
                        <li className="skill-list-item">JavaScript</li>
                        <li className="skill-list-item">TypeScript</li>
                        <li className="skill-list-item">Node.js</li>
                        <li className="skill-list-item">React</li>
                        <li className="skill-list-item">MongoDB</li>
                        <li className="skill-list-item">MySQL</li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default About;