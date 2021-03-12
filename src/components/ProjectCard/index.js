import React from "react";
import "./style.css";

function ProjectCard(props) {
  return <div className="project-card">{props.children}</div>;
}

export default ProjectCard;
