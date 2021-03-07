import React from 'react';
import './style.css';

function ProjectCard(props) {
    return (
        <div className="card-container">
            <div className="img-container">
                <img src={props.image} className="project-card-image" alt={props.name} />
            </div>
            <div className="card-body">
                <ul className="card-body-list">
                    <li className="card-body-list-item">
                        <strong>Title:</strong> {props.name}
                    </li>
                    <li className="card-body-list-item">
                        <strong>Description:</strong> {props.description}
                    </li>
                    <li className="card-body-list-item">
                        <strong>Languages/Technologies:</strong> {props.technologies}
                    </li>
                    <li className="card-body-list-item">
                        <strong>Deployed Application:</strong> {props.deployed}
                    </li>
                    <li className="card-body-list-item">
                        <strong>GitHub Repository:</strong> {props.repository}
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default ProjectCard;