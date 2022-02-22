import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

import { FaAngleDoubleDown, FaDev, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import './homepage.style.scss';

import logo from '../../assets/wolf-logo_D5.png';
import glasses from '../../assets/wolf-logo_D6.png';
import pixel from '../../assets/logo_pixel_large.png'
import robot_wolf from '../../assets/robot_logo.png';
import hardhat from '../../assets/hardhat_logo.png';

const HomePage = () => (
    <div className="home-background">
        <div className='homepage'>
            <div id="greeting">
                <div id="mainlogo">
                    <img id='logo' src={logo} alt="Logo" />
                    <div className="title">
                        <h1>Aaron Wolf</h1>
                        <h3>Web Developer.<br/>
                        Teacher.<br/>
                        Nerd.</h3>
                    </div>
                </div>
                <Scroll activeClass="active" to="pages" spy={true} smooth={true}>
                    <FaAngleDoubleDown id="more" /> 
                </Scroll>
            </div>

            <div id="pages">       
                <a className="page" id="about" href='/about'>
                    <img className='linkLogo' src={robot_wolf} alt="About" />
                    <h3 className="description typewriter">About.</h3>
                </a>
                <a className="page" id="portfolio" href='/portfolio'>
                    <img className='linkLogo' src={hardhat} alt="Portfolio" />
                    <h3 className="description typewriter">Portfolio.</h3>
                </a>
                <a className="page" id="blog" href='/blog'>
                    <img className='linkLogo' src={glasses} alt="Blog" />
                    <h3 className="description typewriter">Blog.</h3>
                </a>
                <a className="page" id="contact" href='/contact'>
                    <img className='linkLogo' src={pixel} alt="Contact" />
                    <h3 className="description typewriter">Contact.</h3>
                </a>
            </div>

            <div id="icons">
                <a href="https://dev.to/wolfmath" 
                   target="_blank"
                   rel="noopener noreferrer">
                    <FaDev className="icon" />
                </a>
                <a href="https://www.linkedin.com/in/wolf-math/" 
                   target="_blank"
                   rel="noopener noreferrer">
                    <FaLinkedin className="icon" />
                </a>
                <a href="https://github.com/wolf-math" 
                   target="_blank"
                   rel="noopener noreferrer">
                    <FaGithub className="icon" />
                </a>
                <Link to="/contact">
                    <FaEnvelope className="icon" />
                </Link>
            </div>
        </div>
    </div>
)

export default HomePage;