import React from "react";
import "./style.css";

const PageDescription = (props) => {
  return <h2 className="page-description">{props.children}</h2>;
};

export default PageDescription;
