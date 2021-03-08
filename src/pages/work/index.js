import React from 'react';
import Navbar from '../../components/navbar/index';
import Footer from '../../components/footer';
import BT from './pwa-budget-tracker.png';
import NT from './note-taker-app.png';
import RG from './readme-generator.png';
import './style.css';
import PageWrapper from '../../components/PageWrapper';
import HeaderContainer from '../../components/HeaderContainer';
import Header from '../../components/Header';
import PageDescription from '../../components/PageDescription';
import ProjectCard from '../../components/ProjectCard';
import ImageContainer from '../../components/ImageContainer';
import ProjectLinksContainer from '../../components/ProjectLinksContainer';

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
                        <a className="project-image-link" href=""></a>
                        <img src={BT} className="project-image" alt="budget-tracker" />
                    </ImageContainer>
                    <h2 className="project-name">Budget Tracker</h2>
                    <p className="project-paragraph"><strong>Description: </strong>Web application that allows users to easily track their money (purchases and deposits), both online and offline.</p>
                    <p className="project-paragraph"><strong>Languages/Technologies Used: </strong>JavaScript, HTML, Bootstrap, and MongoDB.</p>
                    <ProjectLinksContainer>
                        <a className="project-link" href="https://quiet-temple-68742.herokuapp.com/">Deployed Application</a>
                        <a className="project-link" href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker">GitHub Repository</a>
                    </ProjectLinksContainer>
                </ProjectCard>
                <ProjectCard>
                    <ImageContainer>
                        <a className="project-image-link" href=""></a>
                        <img src={NT} className="project-image" alt="note-taker" />
                    </ImageContainer>
                    <h2 className="project-name">Note Taker</h2>
                    <p className="project-paragraph"><strong>Description: </strong>Web application where users can write, save, and delete notes.</p>
                    <p className="project-paragraph"><strong>Languages/Technologies Used: </strong>JavaScript, Node.js, HTML, and Bootstrap.</p>
                    <ProjectLinksContainer>
                        <a className="project-link" href="https://hank-holmes-note-taker.herokuapp.com/">Deployed Application</a>
                        <a className="project-link" href="https://github.com/HHH-603/Note-Taker">Repository</a>
                    </ProjectLinksContainer>
                </ProjectCard>
                <ProjectCard>
                    <ImageContainer>
                        <img src={RG} className="project-image" alt="readme-generator" />
                    </ImageContainer>
                    <h2 className="project-name">README Generator</h2>
                    <p className="project-paragraph"><strong>Description: </strong>Resource that generates a fully formatted README.md file based on user responses to questions that are displayed via their terminal.</p>
                    <p className="project-paragraph"><strong>Languages/Technologies Used: </strong>JavaScript and Node.js.</p>
                    <ProjectLinksContainer>
                        <a className="project-link" href="https://github.com/HHH-603/Online-Offline-Progressive-Web-App-Budget-Tracker">
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