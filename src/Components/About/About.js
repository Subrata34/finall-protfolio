import React from 'react';
import { HashLink } from 'react-router-hash-link';
import './About.css';
import image01 from "../../image/image01.jpg";

const About = () => {
    return (
        <section id="about" className=" about-area ">
            <div className="container ">
                <h3 style={{ textAlign: 'center' }}>About <hr style={{backgroundColor:'white',width:'100%', textAlign: 'center'}} /></h3>
                <div className="about ">
                <div data-aos="fade-right" className="about-details">
                    <p>
                    Hi! I'm Subrata Modak, a passionate React JS developer and Font End  Development. I
                    develop web applications. My core skill is based on JavaScript and I love to
                    do most of the things using JavaScript.This javaScript and web developing are passion job .
                    </p>
                    <div data-aos="fade-left" className="mt-5">
                    <a href="https://drive.google.com/file/d/1ZGkMLQssgiXxnUNuZipc9t74kO0NoYoL/view?usp=sharing" target="_blank">
                        <button style={{ width: '150px', height: '50px', fontSize: '18px' }} className="btn btn-success me-3">Get Resume</button>
                    </a>
                    <HashLink smooth to="#skills"> <button style={{ width: '150px', height: '50px', fontSize: '18px', color: 'white' }} className="btn btn-outline-success">Skills</button></HashLink>
                    
                    </div>
                </div>
                <div data-aos="flip-left" className="about-image">
                    <div className="image">
                    <img alt="profile" src={image01}/>
                    </div>
                </div>
                </div>
            </div>
        </section>
    );
};

export default About;