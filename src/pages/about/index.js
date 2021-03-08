import React from 'react';
import AboutContainer from '../../components/AboutContainer';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar';
import PageWrapper from '../../components/PageWrapper';
import ProfileContainer from '../../components/ProfileContainer';
import ProfilePic from '../../images/profile-picture.png';
import './style.css';

const About = () => {
    return (
        <>
            <Navbar />
            <h1 className="heading">About</h1>
            <PageWrapper>
                <ProfileContainer>
                    <img className="profile" src={ProfilePic} alt="profile" />
                </ProfileContainer>
                <AboutContainer>
                    <p>
                        I'm originally from <a className="about-link" href="https://en.wikipedia.org/wiki/Dunbarton,_New_Hampshire">Dunbarton, NH</a>, and recently earned my Full Stack Web Development certification from <a className="about-link" href="https://en.wikipedia.org/wiki/University_of_North_Carolina_at_Charlotte">UNC Charlotte</a> (class of 2021). I previously worked at <a className="about-link" href="https://www.everyaction.com/">EveryAction</a> in Washington, DC, where I helped equip mid-sized nonprofits with unified software solutions tailored to their fundraising and advocacy goals.
                    </p>
                    <br />
                    <p>
                        When I'm not in front of my computer, I enjoy <a className="about-link" href="https://www.alltrails.com/us/north-carolina">hiking</a>, <a className="about-link" href="https://www.foodandwine.com/recipes">working on my cooking skills</a>, rooting for <a className="about-link" href="https://en.wikipedia.org/wiki/Boston_Celtics">the NBA's greatest franchise</a>, and exploring <a className="about-link" href="https://www.tripadvisor.com/Attractions-g49022-Activities-c36-t133-Charlotte_North_Carolina.html">the Queen City's outstanding craft breweries</a>.
                    </p>
                </AboutContainer>
                <div className="skills-container">
                    <h3>Some languages and technologies I've recently been working with are:</h3>
                    <ul className="skill-list">
                        <li className="skill-list-item">JavaScript</li>
                        <li className="skill-list-item">React</li>
                        <li className="skill-list-item">Node.js</li>
                        <li className="skill-list-item">Express.js</li>
                        <li className="skill-list-item">MongoDB</li>
                        <li className="skill-list-item">MySQL</li>
                        <li className="skill-list-item">HTML</li>
                        <li className="skill-list-item">CSS</li>
                        <li className="skill-list-item"></li>
                        <li className="skill-list-item"></li>
                    </ul>
                </div>
            </PageWrapper>
            <Footer />
        </>
    );
};

export default About;