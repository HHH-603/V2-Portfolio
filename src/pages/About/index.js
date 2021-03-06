import React from "react";
import AboutContainer from "../../components/AboutContainer";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderContainer from "../../components/HeaderContainer";
import Navbar from "../../components/Navigation";
import PageWrapper from "../../components/PageWrapper";
import ProfileContainer from "../../components/ProfileContainer";
import SkillsContainer from "../../components/SkillsContainer";
import ProfilePic from "../../images/profile-picture.png";
import "./style.css";

const About = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <Header>About</Header>
      </HeaderContainer>
      <PageWrapper>
        <ProfileContainer>
          <img className="profile" src={ProfilePic} alt="profile" />
        </ProfileContainer>
        <AboutContainer>
          <p>
            I'm originally from{" "}
            <a
              className="about-link"
              href="https://en.wikipedia.org/wiki/Dunbarton,_New_Hampshire"
              target="__blank"
            >
              Dunbarton, NH
            </a>
            , and recently completed{" "}
            <a
              className="about-link"
              href="https://en.wikipedia.org/wiki/University_of_North_Carolina_at_Charlotte"
              target="__blank"
            >
              UNC Charlotte
            </a>
            's Full Stack Web Development Bootcamp. I previously worked at{" "}
            <a
              className="about-link"
              href="https://www.everyaction.com/"
              target="__blank"
            >
              EveryAction
            </a>{" "}
            in Washington, DC, where I helped equip small and mid-sized
            nonprofits with unified CRM software solutions tailored to their
            fundraising, advocacy, and reporting goals.
          </p>
          <br />
          <p>
            When I'm not in front of my computer, I enjoy{" "}
            <a
              className="about-link"
              href="https://www.alltrails.com/us/north-carolina"
              target="__blank"
            >
              hiking
            </a>
            ,{" "}
            <a
              className="about-link"
              href="https://www.foodandwine.com/recipes"
              target="__blank"
            >
              working on my cooking skills
            </a>
            , rooting for{" "}
            <a
              className="about-link"
              href="https://en.wikipedia.org/wiki/Boston_Celtics"
              target="__blank"
            >
              the NBA's greatest franchise
            </a>
            , and exploring{" "}
            <a
              className="about-link"
              href="https://www.tripadvisor.com/Attractions-g49022-Activities-c36-t133-Charlotte_North_Carolina.html"
              target="__blank"
            >
              the Queen City's outstanding craft breweries
            </a>
            .
          </p>
          <p className="skills-header">
            <strong>
              Some languages and technologies I've recently been working with
              are:
            </strong>
          </p>
        </AboutContainer>
        <SkillsContainer>
          <ul className="skill-list">
            <li className="skill-list-item">JavaScript</li>
            <li className="skill-list-item">React</li>
            <li className="skill-list-item">Node.js</li>
            <li className="skill-list-item">Express.js</li>
            <li className="skill-list-item">MongoDB</li>
            <li className="skill-list-item">MySQL</li>
            <li className="skill-list-item">HTML</li>
            <li className="skill-list-item">CSS</li>
          </ul>
        </SkillsContainer>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default About;
