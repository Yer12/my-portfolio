import React from 'react';
import Image from 'next/image'
import pc from "../../../styles/projectCard.module.css"

const ProjectCard = ({project}) => {
    return (
        <div className={pc.projectCard}>
            <Image className={pc.img} src={project.img} width={project.width} height={project.height} />
            <div className={pc.projectInfo}>
                <h1>{project.title}</h1>
                <p>{project.desc}</p>
                <p>Stacks: {project.stacks}</p>
            </div>
        </div>
    );
};

export default ProjectCard;