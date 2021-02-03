import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

import { FaChevronDown, FaDev, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import './homepage.style.scss';

import Navbar from '../../components/navbar/navbar.component';

import logo from '../../assets/wolf-logo_D5.png';
import teacher from '../../assets/wolf-logo_D6.png';
import pixel from '../../assets/logo_pixel_large.png'
import robot_wolf from '../../assets/robot_logo.png';
import hardhat from '../../assets/hardhat_logo.png';


const HomePage = () => (

    <div className="home-background">
        {/* <Navbar /> */}
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
                    <FaChevronDown id="more" /> 
                </Scroll>
            </div>

            <div id="pages">       
                <Link className="page" id="about" to='/about'>
                    <img className='linkLogo' src={robot_wolf} alt="About" />
                    <h3 className="description typewriter">About.</h3>
                </Link>
                <Link className="page" id="portfolio" to='/portfolio'>
                    <img className='linkLogo' src={hardhat} alt="Portfolio" />
                    <h3 className="description typewriter">Portfolio.</h3>
                </Link>
                <Link className="page" id="blog" to='/blog'>
                    <img className='linkLogo' src={logo} alt="Blog" />
                    <h3 className="description typewriter">Blog.</h3>
                </Link>
                <a className="page" id="teacher" href='http://wolf-math.com/'
                   target="_blank"
                   rel="noopener noreferrer">
                    <img className='linkLogo' src={teacher} alt="teacher" />
                    <h3 className="description typewriter">Teacher.</h3>
                </a>
                <Link className="page" id="contact" to='/contact'>
                    <img className='linkLogo' src={pixel} alt="Contact" />
                    <h3 className="description typewriter">Contact.</h3>
                </Link>
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