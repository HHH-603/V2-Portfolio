import React from 'react';
import Footer from '../../components/footer';
import Header from '../../components/Header';
import HeaderContainer from '../../components/HeaderContainer';
import Navbar from '../../components/navbar';
import PageWrapper from '../../components/PageWrapper';
import './style.css';

const About = () => {
    return (
        <>
            <Navbar />
            <HeaderContainer>
                <Header>Contact</Header>
            </HeaderContainer>
            <PageWrapper>
            </PageWrapper>
            <Footer />
        </>
    );
};

export default About;