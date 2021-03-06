import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';
import image02 from '../../image/image02.jpg';
import image03 from '../../image/image03.jpg';
import image04 from '../../image/image04.jpg';

const projectData = [
    {
        projectImg: image03,
        projectTitle: "Car shop ",
        projectDescription: "Complete MERN stack responsive website for Car selling company who sells different types of shop.",
        projectTechnology: ["React JS,", "React Router,", "React Hook Form,", "Firebase Auth,", "Meterial UI ,", "Express"],
        projectWebsiteLink: "https://car-shop-96d46.web.app/",
        projectSourceCodeLink:"https://github.com/Subrata34/houda-car",
        projectSourceCodeLink2: "https://github.com/Subrata34/niche-website-server-side-Subrata34"
    },
    {
        projectImg: image02,
        projectTitle: "Health Care",
        projectDescription: "React js site which used bootstrap css frame work ",
        projectTechnology: ["React JS,", "React Router,","Firebase Auth,", "Bootstrap,"],
        projectWebsiteLink: "https://health-care-d0445.web.app",
        projectSourceCodeLink: "https://github.com/Subrata34/health-care-",
    },
    {
        projectImg: image04,
        projectTitle: "Tourism Agency Site",
        projectDescription: "React js site which used Material UI frame work and this is Tourism Agency Sit ",
        projectTechnology: ["React JS,", "React Router,","Firebase Authentication,","material UI,","Express Js,","MongoDB,"],
        projectWebsiteLink: "https://traveler-c358e.web.app/",
        projectSourceCodeLink: "https://github.com/Subrata34/tourist-client",
        projectSourceCodeLink2:"https://github.com/Subrata34/tourist-server"
    }
   
]

const Projects = () => {

    return (
        <section id="projects" className="container project-area">
            <h3 style={{ textAlign: 'center' }}>Projects<hr style={{backgroundColor:'white',width:'10%'}} /></h3>
            <div className="row ">
                    {
                        projectData.map(pd=><ProjectCard project={pd}></ProjectCard>)
                    }
            </div>
        </section>
    );
};

export default Projects;