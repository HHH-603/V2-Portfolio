import React from "react";
import "./style.css";

const ProjectName = (props) => {
  return <h2 className="project-name">{props.children}</h2>;
};

export default ProjectName;
