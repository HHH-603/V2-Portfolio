import React, { Component } from 'react';
import ProjectCard from '../../components/ProjectCard/index';
import projects from '../../projects.json';

class ProjectList extends Component {
    state = {
        projects
    };

    render() {
        return (
            <div className="project-list-container">
                {this.state.projects.map(project => (
                    <ProjectCard
                        id={project.id}
                        key={project.id}
                        image={project.image}
                        name={project.name}
                        description={project.description}
                        deployed={project.deployed}
                        repository={project.repository}
                    />
                ))}
            </div>
        );
    };
};

export default ProjectList;