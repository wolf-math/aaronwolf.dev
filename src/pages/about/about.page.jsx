import React from 'react';

import './about.style.scss';

import Navbar from '../../components/navbar/navbar.component';

import { FaTerminal, FaDiamond, FaPython, FaReact } from 'react-icons/fa';

const About = () => (
    <>
        <Navbar />
        <div id="about">
            <h1>About <span class='highlight'>Aaron</span></h1>

            <div class="container">
                <p>I am a full stack developer. I excel at understanding the needs of client. I'm a quick learner who can work on a wide variety of projects, and I'm able to work on existing projects or creating new projects from scratch.</p>

                <p>Prior to being a full stack developer I was a high school Computer Programming and Mathematics teacher in Cleveland, Ohio. I used to teach mathematics from a programming perspective with the help of my favorite tool, the <a href="http://www.raspberrypi.org">Raspberry Pi</a>.</p>

                <p>You can find most of my lesson plans on this website (or Github). They are in the form of LaTeX code and they are, slowly but surely, being converted into Jupyter Notebooks</p>

                <p>Are you looking for a develoer? I'm for hire!</p>
            </div>

            <h1><i class="fas fa-terminal"></i> Coding <span class="highlight">Languages</span></h1>
            <div class="languages">
                <div class="language">
                    <h5><i class="fab fa-html5"></i> Web Dev</h5>
                    <ul class="skills">
                        <li>ReactJS</li>
                        <li>Firebase</li>
                        <li>HTML5 & CSS3</li>
                        <li>Bootstrap</li>
                        <li>SASS/SCSS</li>
                    </ul>
                </div>
                <div class="language">
                    <h5><i class="fab fa-python"></i> Python</h5>
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
                    <h5><i class="fa fa-diamond"></i> Ruby</h5>
                    <ul class="skills">
                        <li>Ruby on Rails</li>
                        <li>Webpacker</li>
                    </ul>
                </div>
                <div class="language">
                    <h5><i class="fas fa-microchip"></i> Other Technologies</h5>
                    <ul class="skills nobullet">
                        <li><i class="fab fa-wordpress"></i> Wordpress</li>
                        <li><i class="fab fa-linux"></i> Linux</li>
                        <li><i class="fas fa-database"></i> PostgreSQL</li>
                    </ul>
                </div>
            </div>
        </div>
    </>
)

export default About;