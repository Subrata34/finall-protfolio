import React from 'react';
import ProjectCard from './ProjectCard/ProjectCard';
import './Projects.css';
import cleanMoto from '../../media/plot.png';
import freshBazar from '../../media/Ploat.png';
import teamFinder from '../../media/edu.png';
const projectData = [
    {
        projectImg: cleanMoto,
        projectTitle: "Getaway Tourism",
        projectDescription: "Complete MERN stack responsive website for Car Wash company who sells different types of services.",
        projectTechnology: ["React JS,", "React Router,", "React Hook Form,", "React Stripe,", "Firebase Auth,", "Bootstrap,", "Express"],
        projectWebsiteLink: "https://clean-moto.web.app/",
        projectSourceCodeLink: "https://github.com/Melon-ali/tourism-or-delivery-website-client-side",
        projectSourceCodeLink2: "https://github.com/Melon-ali/-tourism-or-delivery-website-server-side"
    },
    {
        projectImg: freshBazar,
        projectTitle: "Factory Ave",
        projectDescription: "Complete MERN Stack responsive website for an eCommerce company that sells different types of products.",
        projectTechnology: ["React JS,", "React Router,", "React Hook Form,","Firebase Auth,", "Bootstrap,", "Express"],
        projectWebsiteLink: "https://factory-ave.web.app/",
        projectSourceCodeLink: "https://github.com/Melon-ali/-niche-website-client-side",
        projectSourceCodeLink2: "https://github.com/Melon-ali/niche-website-server-side"
    },
    {
        projectImg: teamFinder,
        projectTitle: "Education Coures",
        projectDescription: "A Education Course information-based responsive website to update yourself about your queries.",
        projectTechnology: ["React JS,", "React Router,","Bootstrap,","React Bootstrap"],
        projectWebsiteLink: "https://loving-volhard-d1d936.netlify.app/",
        projectSourceCodeLink: "https://github.com/Melon-ali/-review-website"
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