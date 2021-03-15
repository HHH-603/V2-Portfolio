import React from "react";
import Navbar from "../../components/Navigation/index";
import Footer from "../../components/Footer";
import CQ from "./constitution-quiz.png";
import BT from "./pwa-budget-tracker.png";
import NT from "./note-taker-app.png";
import RG from "./readme-generator.png";
import "./style.css";
import PageWrapper from "../../components/PageWrapper";
import HeaderContainer from "../../components/HeaderContainer";
import Header from "../../components/Header";
import PageDescription from "../../components/PageDescription";
import ProjectCard from "../../components/ProjectCard";
import ImageContainer from "../../components/ImageContainer";
import ProjectLinksContainer from "../../components/ProjectLinksContainer";
import ProjectName from "../../components/ProjectName";

const Work = () => {
  return (
    <>
      <Navbar />
      <HeaderContainer>
        <Header>Work</Header>
        <PageDescription>
          Here are a few projects that I've been working on:
        </PageDescription>
      </HeaderContainer>
      <PageWrapper>
        <ProjectCard>
          <ImageContainer>
            <a
              className="project-image-link"
              href="https://constitutionquiz.herokuapp.com/loginform"
            >
              <img src={CQ} className="project-image" alt="constitution-quiz" />
            </a>
          </ImageContainer>
          <ProjectName>Constitution Quiz</ProjectName>
          <p className="project-card-paragraph">
            <strong>Description: </strong>Web application where users can test
            their knowledge of American civics and history.
          </p>
          <p className="project-card-paragraph">
            <strong>Languages/Technologies Used: </strong>JavaScript, React,
            Node.js, React-Modal, Express.js, Lodash, Bcryptjs, Morgan, Axios,
            MongoDB, and Passport.
          </p>
          <ProjectLinksContainer>
            <a
              className="project-link"
              href="https://constitutionquiz.herokuapp.com/loginform"
            >
              Deployed Application
            </a>
            <a
              className="project-link"
              href="https://github.com/HHH-603/Constitution_Quiz"
            >
              GitHub Repository
            </a>
          </ProjectLinksContainer>
        </ProjectCard>
        <ProjectCard>
          <ImageContainer>
            <a
              className="project-image-link"
              href="https://quiet-temple-68742.herokuapp.com/"
            >
              <img src={BT} className="project-image" alt="budget-tracker" />
            </a>
          </ImageContainer>
          <ProjectName>Budget Tracker</ProjectName>
          <p className="project-card-paragraph">
            <strong>Description: </strong>Web application that allows users to
            easily track their money (purchases and deposits), both online and
            offline.
          </p>
          <p className="project-card-paragraph">
            <strong>Languages/Technologies Used: </strong>JavaScript, HTML,
            Bootstrap, and MongoDB.
          </p>
          <p className="project-card-paragraph">
            <strong>Role: </strong>Sole Author.
          </p>
          <ProjectLinksContainer>
            <a
              className="project-link"
              href="https://quiet-temple-68742.herokuapp.com/"
            >
              Deployed Application
            </a>
            <a
              className="project-link"
              href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker"
            >
              GitHub Repository
            </a>
          </ProjectLinksContainer>
        </ProjectCard>
        <ProjectCard>
          <ImageContainer>
            <a
              className="project-image-link"
              href="https://hank-holmes-note-taker.herokuapp.com/"
            >
              <img src={NT} className="project-image" alt="note-taker" />
            </a>
          </ImageContainer>
          <ProjectName>Note Taker</ProjectName>
          <p className="project-card-paragraph">
            <strong>Description: </strong>Web application where users can write,
            save, and delete notes.
          </p>
          <p className="project-card-paragraph">
            <strong>Languages/Technologies Used: </strong>JavaScript, Node.js,
            HTML, and Bootstrap.
          </p>
          <p className="project-card-paragraph">
            <strong>Role: </strong>Sole Author.
          </p>
          <ProjectLinksContainer>
            <a
              className="project-link"
              href="https://hank-holmes-note-taker.herokuapp.com/"
            >
              Deployed Application
            </a>
            <a
              className="project-link"
              href="https://github.com/HHH-603/Note-Taker"
            >
              Repository
            </a>
          </ProjectLinksContainer>
        </ProjectCard>
        <ProjectCard>
          <ImageContainer>
            <a
              className="project-image-link"
              href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker"
            >
              <img src={RG} className="project-image" alt="readme-generator" />
            </a>
          </ImageContainer>
          <ProjectName>README Generator</ProjectName>
          <p className="project-card-paragraph">
            <strong>Description: </strong>Resource that generates a fully
            formatted README.md file based on user responses to questions that
            are displayed via their terminal.
          </p>
          <p className="project-card-paragraph">
            <strong>Languages/Technologies Used: </strong>JavaScript and
            Node.js.
          </p>
          <p className="project-card-paragraph">
            <strong>Role: </strong>Sole Author.
          </p>
          <ProjectLinksContainer>
            <a
              className="project-link"
              href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker"
            >
              GitHub Repository
            </a>
          </ProjectLinksContainer>
        </ProjectCard>
      </PageWrapper>
      <Footer />
    </>
  );
};

export default Work;