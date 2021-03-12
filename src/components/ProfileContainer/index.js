import React from "react";
import "./style.css";

const ProfileContainer = (props) => {
  return <div className="profile-container">{props.children}</div>;
};

export default ProfileContainer;
