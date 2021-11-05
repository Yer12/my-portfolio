import React from 'react';
import p from "../../styles/projects.module.css";
import ProjectCard from "./ProjectCard/component";
import {IProject} from "../../types/project";
interface ProjectListProps {
    projects: IProject[]
}
const Projects: React.FC<ProjectListProps> = ({projects}) => {
    return (
        <div className={p.projects}>
            <div className={p.cont}>
                <h1 className={p.sectionHeader}>{'<>'} PROJECTS {'</>'}</h1>
                {
                    projects.map((project, idx) =>
                        <React.Fragment key={idx}>
                            <ProjectCard project={project}/>
                        </React.Fragment>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;