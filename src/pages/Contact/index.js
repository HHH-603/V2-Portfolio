import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HeaderContainer from "../../components/HeaderContainer";
import Navbar from "../../components/Navigation";
import PageWrapper from "../../components/PageWrapper";
import PageDescription from "../../components/PageDescription";
import "./style.css";

const About = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <Header>Contact</Header>
        <PageDescription>
          I'm currently open to new opportunities, so please feel free to reach
          out!
        </PageDescription>
      </HeaderContainer>
      <PageWrapper>
        <div className="contact-links-container">
          <a className="contact-link" href="mailto:hholmes726@gmail.com">
            Email
          </a>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/henryhamiltonholmes/"
            target="__blank"
          >
            LinkedIn
          </a>
          <a
            className="contact-link"
            href="https://github.com/HHH-603"
            target="__blank"
          >
            GitHub
          </a>
        </div>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default About;
