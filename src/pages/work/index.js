import React from 'react';
import Footer from '../../components/footer';
import Navbar from '../../components/navbar/index';
import ProjectList from './project-list';
import './style.css';

const Work = () => {
    return (
        <>
            <Navbar />
            <h1 className="heading">About</h1>
            <div className="page-wrapper">
                <h4 className="heading-description">
                    Below are some examples of my work: 
                </h4>
                <ProjectList />
            </div>
            <Footer />
        </>
    );
};

export default Work;