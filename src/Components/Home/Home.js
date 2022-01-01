import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Intro from '../Intro/Intro';
import Projects from '../Projects/Projects';
import Skill from '../Skill/Skill';
import Topbar from '../Topbar/Topbar';
import './Home.css';

const Home = () => {
    return (
        <div style={{ height: '100%' }} className="brand-color">          
            <Topbar></Topbar>
            <Intro></Intro>
            <About></About>
            <Skill></Skill>
            <Projects></Projects>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;