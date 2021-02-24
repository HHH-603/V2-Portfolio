import React from 'react';
import './style.css';

const LandingContainer = (props) => {
    return (
        <div className="landing-container">{props.children}</div>
    );
};

export default LandingContainer;