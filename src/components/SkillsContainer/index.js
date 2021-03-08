import React from 'react';
import './style.css';

const SkillsContainer = (props) => {
    return (
        <div className="skills=container">{props.children}</div>
    );
};

export default SkillsContainer;