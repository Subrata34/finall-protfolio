import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './About.css';

const About = () => {
    return (
        <section id="about" className=" about-area ">
            <div className="container ">
                <h3 style={{ textAlign: 'center' }}>About <hr style={{backgroundColor:'white',width:'100%', textAlign: 'center'}} /></h3>
                <div className="about ">
                <div data-aos="fade-right" className="about-details">
                    <p>
                    Hello! I'm Subrata Modak, a passionate React JS developer. I
                    develop web applications. My core skill is based on JavaScript and I love to
                    do most of the things using JavaScript. I love to make the web
                    more open to the world. To gain confidence and fame using my potential in the field of “Web Development”, passionate MREN stack developer and express my
                    innovative creative skills for self and company growth.
                    Handling the difficulties and bad situations.
                    </p>
                    <div data-aos="fade-left" className="mt-5">
                    <a href="https://drive.google.com/file/d/1ZbNjneb3fuA21-FGus3Q3XXr9Jiyvf4d/view?usp=sharing" target="_blank">
                        <button style={{ width: '150px', height: '50px', fontSize: '18px' }} className="btn btn-success me-3">Get Resume</button>
                    </a>
                    <HashLink smooth to="#skills"> <button style={{ width: '150px', height: '50px', fontSize: '18px', color: 'white' }} className="btn btn-outline-success">Skills</button></HashLink>
                    
                    </div>
                </div>
                <div data-aos="flip-left" className="about-image">
                    <div className="image">
                    <img alt="profile" src="./image/image01.jpg" />
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;