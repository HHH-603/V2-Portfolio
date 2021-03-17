import React from "react";
import "./style.css";

const PageDescription = (props) => {
  return (
    <p className="page-description">
      <strong>{props.children}</strong>
    </p>
  );
};

export default PageDescription;
