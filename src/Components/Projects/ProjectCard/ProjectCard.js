import React from 'react';
import './ProjectCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faCode } from '@fortawesome/free-solid-svg-icons';
import ProjectFooterCardInfo from './ProjectFooterCardInfo/ProjectFooterCardInfo';
const ProjectCard = ({ project }) => {
    const { projectImg, projectTitle, projectDescription, projectTechnology, projectWebsiteLink, projectSourceCodeLink, projectSourceCodeLink2 } = project;
    return (
        <div  className="col-md-4 d-flex justify-content-center my-2">
            <div data-aos="fade-up" class="card card-background " >
                <img class="card-img-top" src={projectImg} alt="Card image cap" />
                <div class="card-body ">
                    <h5 class="card-title text-light">{projectTitle}</h5>
                    <p class="card-text">{projectDescription}</p>
                    <a href={projectWebsiteLink} class="text-light me-2" target="_blank"><FontAwesomeIcon icon={faGlobe} /></a>
                    <a href={projectSourceCodeLink} class="text-light ms-2" target="_blank"><FontAwesomeIcon icon={faCode} /></a>
                    <a href={projectSourceCodeLink2} class="text-light ms-2" target="_blank"><FontAwesomeIcon icon={faCode} /></a>
                </div>
                <div class="card-footer">
                    {
                        projectTechnology.map(t => <ProjectFooterCardInfo technology={t}></ProjectFooterCardInfo>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;