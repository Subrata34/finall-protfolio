import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';
import './Topbar.css';

const Topbar = () => {
    return (
        <nav className="container bg-nav">
            <Navbar expand="lg">
                <Navbar.Brand href="#home">
                    <a href="#">
                        <span className="text-nav">
                            <h1>SM</h1>
                        </span>
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <button className="btn brand-btn">
                        <FontAwesomeIcon icon={faBars} />
                    </button>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto ">
                        <Nav.Link className="pr-4" style={{direction:"none"}}>
                            <HashLink smooth to="#about"><span className="text-nav ">ABOUT</span></HashLink>
                        </Nav.Link>
                        <Nav.Link className="pr-4">
                        <HashLink smooth to="#skills"><span className="text-nav ">SKILLS</span></HashLink>
                        </Nav.Link>
                        <Nav.Link className="pr-4">
                            <HashLink smooth to="#projects"><span className="text-nav">PROJECTS</span></HashLink>
                        </Nav.Link>
                        <Nav.Link className="pr-4">
                            <HashLink smooth to="#blog"><span className="text-nav">BLOGS</span></HashLink>
                        </Nav.Link>
                        <Nav.Link className="pr-4">
                            <HashLink smooth to="#contact"><span className="text-nav">CONTACT</span></HashLink>
                        </Nav.Link>
                        <Nav.Link href="https://drive.google.com/file/d/1rG4TsGq1Xntt-DCZHhmEzEYnkpUhfsTS/view?usp=sharing" target="_blank">
                            <span className="text-nav text-border">RESUME</span>
                        </Nav.Link>
                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </nav>
    );
};

export default Topbar;