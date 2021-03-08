import React from 'react';
import './style.css';

const PageWrapper = (props) => {
    return (
        <div className="page-wrapper">{props.children}</div>
    );
};

export default PageWrapper;