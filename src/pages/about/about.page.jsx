import React from 'react';
import { Link } from 'react-router-dom';

import './about.style.scss';

import head from './../../assets/headshot.jpg';

import Navbar from '../../components/navbar/navbar.component';

import { FaTerminal, FaPython, FaReact, 
    FaLinux, FaMicrochip, FaWordpress, FaDatabase, 
    FaDesktop, FaHtml5, FaCss3, FaFire, FaGem, FaSass, FaJs } from 'react-icons/fa';
import { Jumbotron } from 'react-bootstrap';

const About = () => (
    <>
        <Navbar />
        <div className="about">

            <Jumbotron fluid>
                <img className="head" src={head} alt="headshot" />
                <h1>About <span className='highlight'>Aaron</span></h1>
            </Jumbotron>

            <div className="content">
                <p>I am a full stack developer with an affection for front end. Most of my experience is in ReacJS, but I also have background in Python (Django) and Ruby on Rails. As a former computer programming teacher in a diverse multicultural public school, I am comfortable understanding and working with people of all types of backgrounds. My favorite tool for teaching computer programming is the <a href="http://www.raspberrypi.org">Raspberry Pi</a>.</p>
                <p>I'm a huge fan of open source. Therefore, when possible, all of my projects can be found on GitHub (including my old lesson plans).</p>
                <p>Are you looking for a developer? I'm for hire! <Link to="/contact">Reach out</Link>.</p>
            </div>            

            <h1><FaTerminal /> Coding <span className="highlight">Languages</span></h1>
            <div className="languages">
                <div className="language">
                    <h3 className="skilltitle"><FaDesktop /> WebDev</h3>
                    <ul className="skills">
                        <li><FaJs /> JavaScript</li>
                        <li><FaReact /> ReactJS</li>
                        <li><FaFire /> Firebase</li>
                        <li><FaHtml5 /> HTML5</li>
                        <li><FaCss3 /> CSS3</li>
                        <li><FaSass /> SASS/SCSS</li>
                        <li><FaGem /> Ruby on Rails</li>
                    </ul>
                </div>
                <div className="language">
                    <h3 className="skilltitle"><FaPython /> Python</h3>
                    <ul className="skills">
                        <li>Django</li>
                        <li>MatPlotLib</li>
                        <li>NumPy</li>
                        <li>SimPy</li>
                        <li>Pandas</li>
                        <li>Jupyter Notebook</li>
                    </ul>
                </div>
                <div className="language">
                    <h3 className="skilltitle"><FaMicrochip /> Other </h3>
                    <ul className="skills nobullet">
                        <li><FaWordpress /> Wordpress</li>
                        <li><FaLinux /> Linux</li>
                        <li><FaDatabase /> SQL</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)

export default About;