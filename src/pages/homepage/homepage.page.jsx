import React from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

import './homepage.style.scss';

import logo from '../../assets/wolf-logo_D5.png';
import teacher from '../../assets/wolf-logo_D6.png';
import pixel from '../../assets/logo_pixel_large.png'
import robot_wolf from '../../assets/robot_logo.png';

const HomePage = () => (
    <>
    <div className='homepage'>
        <div id="greeting">
            <div id="mainlogo">
                <img id='logo' src={logo} alt="Logo" />;
                <div className="title">
                    <h1>Aaron Wolf</h1>
                    <h3>web developer<br/>
                    Teacher <br/>
                    Nerd.</h3>
                </div>
            </div>
            <FaChevronDown id="more" />
        </div>

        <div id="pages">       
            <Link className="page" id="projects" to='/projects'>
                <img className='linkLogo' src={teacher} alt="Projects" />
                <h3 className="description typewriter">Projects.</h3>
            </Link>
            <Link className="page" id="about" to='/about'>
                <img className='linkLogo' src={robot_wolf} alt="About" />
                <h3 className="description typewriter">About.</h3>
            </Link>
            <Link className="page" id="blog" to='/blog'>
                <img className='linkLogo' src={pixel} alt="Blog" />
                <h3 className="description typewriter">Blog.</h3>
            </Link>
            <Link className="page" id="teacher" to='/teacher'>
                <img className='linkLogo' src={teacher} alt="Projects" />
                <h3 className="description typewriter">Teacher.</h3>
            </Link>
        </div>

        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon="coffee" />
        <FontAwesomeIcon icon="coffee" />
    </div>

    </>
)

export default HomePage;