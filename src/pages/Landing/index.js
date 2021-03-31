import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header";
import LandingContainer from "../../components/LandingContainer";
import Wrapper from "../../components/Wrapper";

import "./style.css";

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
    return "Thank you for visiting my portfolio so late at night!";
  }
};

const Landing = () => {
  return (
    <Wrapper>
      <LandingContainer>
        <Header>{greeting()}</Header>
        <p className="landing-paragraph">
          My name is{" "}
          <a
            className="anchor-link"
            href="https://www.linkedin.com/in/henryhamiltonholmes/"
            target="__blank"
          >
            Hank
          </a>
          , and I'm a Full Stack Web Developer based in{" "}
          <a
            className="anchor-link"
            href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina"
            target="__blank"
          >
            Charlotte, NC
          </a>
          . I love to create thoughtfully-designed web apps and websites, solve
          complex problems, and learn new things every day.
        </p>
        <div className="landing-page-links-container">
          <Link className="landing-page-link" to="/about">
            About
          </Link>
          <Link className="landing-page-link" to="/projects">
            Projects
          </Link>
          <Link className="landing-page-link" to="/contact">
            Contact
          </Link>
        </div>
      </LandingContainer>
    </Wrapper>
  );
};

export default Landing;
