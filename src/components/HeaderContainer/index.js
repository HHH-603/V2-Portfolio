import React from 'react';
import './style.css';

const HeaderContainer = (props) => {
    return (
        <div className="header-container">{props.children}</div>
    );
};

export default HeaderContainer;