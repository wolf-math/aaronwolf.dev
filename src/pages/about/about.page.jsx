import React from 'react';

import './about.style.scss';

import Navbar from '../../components/navbar/navbar.component';

import { FaTerminal, FaPython, FaReact, FaLinux, FaMicrochip } from 'react-icons/fa';

const About = () => (
    <>
        <Navbar />
        <div id="about">
            <h1>About <span class='highlight'>Aaron</span></h1>

            <div class="container">
                <p>I am a full stack developer with a focus on front end. I'm a quick learner who can work on a wide variety of projects, and I'm able to work on existing projects or creating new projects from scratch.</p>

                <p>Prior to being a full stack developer I was a high school Computer Programming and Mathematics teacher in Cleveland, Ohio. I used to teach mathematics from a programming perspective with the help of my favorite tool, the <a href="http://www.raspberrypi.org">Raspberry Pi</a>.</p>

                <p>You can find most of my lesson plans on this website (or Github). They are in the form of LaTeX code and they are, slowly but surely, being converted into Jupyter Notebooks</p>

                <p>Are you looking for a develoer? I'm for hire!</p>
            </div>

            <h1><FaTerminal /> Coding <span class="highlight">Languages</span></h1>
            <div class="languages">
                <div class="language">
                    <h5><FaReact /> Web Dev</h5>
                    <ul class="skills">
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>HTML5 & CSS3</li>
                        <li>SASS/SCSS</li>
                        <li>Ruby on Rails</li>
                    </ul>
                </div>
                <div class="language">
                    <h5><FaPython /> Python</h5>
                    <ul class="skills">
                        <li>Django</li>
                        <li>MatPlotLib</li>
                        <li>NumPy</li>
                        <li>SimPy</li>
                        <li>Pandas</li>
                        <li>Jupyter</li>
                    </ul>
                </div>
                <div class="language">
                    <h5><FaMicrochip /> Other Technologies</h5>
                    <ul class="skills nobullet">
                        <li><i class="fab fa-wordpress"></i> Wordpress</li>
                        <li><FaLinux />Linux</li>
                        <li><i class="fas fa-database"></i> SQL</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)

export default About;