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
          >
            Hank
          </a>
          , and I'm a Full Stack Web Developer based in{" "}
          <a
            className="anchor-link"
            href="https://en.wikipedia.org/wiki/Charlotte,_North_Carolina"
          >
            Charlotte, NC
          </a>
          . A friend once told me that if you do what you love, you'll never
          work a day in your life - so I decided to learn how to code!
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
