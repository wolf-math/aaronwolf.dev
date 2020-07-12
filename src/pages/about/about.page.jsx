import React from 'react';

import './about.style.scss';

import Navbar from '../../components/navbar/navbar.component';

import { FaTerminal, FaPython, FaReact, 
    FaLinux, FaMicrochip, FaWordpress, FaDatabase, 
    FaDesktop, FaHtml5, FaCss3, FaFire, FaGem, FaSass } from 'react-icons/fa';

const About = () => (
    <>
        <Navbar />
        <div id="about">
            <h1>About <span class='highlight'>Aaron</span></h1>

            <div class="container">
                <p>I am a full stack developer with a focus on front end, looking for a job in Israel or remotely.</p>

                <p>Prior to being a full stack developer I was a high school Computer Programming and Mathematics teacher in Cleveland, Ohio. I used to teach mathematics from a programming perspective with the help of my favorite tool, the <a href="http://www.raspberrypi.org">Raspberry Pi</a>.</p>

                <p>You can find most of my lesson plans on this website (or Github). They are in the form of LaTeX code and they are, slowly but surely, being converted into Jupyter Notebooks</p>

                <p>Are you looking for a developer? I'm for hire! Reach out <a href = "mailto: contact@aaronwolf.dev">contact@aaronwolf.dev</a>
</p>
            </div>

            <h1><FaTerminal /> Coding <span class="highlight">Languages</span></h1>
            <div class="languages">
                <div class="language">
                    <h3><FaDesktop /> Web Dev</h3>
                    <ul class="skills">
                        <li><FaReact /> ReactJS</li>
                        <li><FaFire /> Firebase</li>
                        <li><FaHtml5 /> HTML5</li>
                        <li><FaCss3 /> CSS3</li>
                        <li><FaSass /> SASS/SCSS</li>
                        <li><FaGem /> Ruby on Rails</li>
                    </ul>
                </div>
                <div class="language">
                    <h3><FaPython /> Python</h3>
                    <ul class="skills">
                        <li>Django</li>
                        <li>MatPlotLib</li>
                        <li>NumPy</li>
                        <li>SimPy</li>
                        <li>Pandas</li>
                        <li>Jupyter Notebook</li>
                    </ul>
                </div>
                <div class="language">
                    <h3><FaMicrochip /> Other Technologies</h3>
                    <ul class="skills nobullet">
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