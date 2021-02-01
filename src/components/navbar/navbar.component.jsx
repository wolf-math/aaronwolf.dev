import React from 'react';
import { Link } from 'react-router-dom';

import { FaDev, FaLinkedin, FaGithub } from 'react-icons/fa';

import './navbar.style.scss';

const Navbar = () => (
    <div className='navbar'>
        <div id='options'>
            <Link className='option' to='/'>
                Home
            </Link>
            <Link className='option' to='/portfolio'>
                Portfolio
            </Link>
            <Link className='option' to='/about'>
                About
            </Link>
            <Link className='option' to='/blog'>
                Blog
            </Link>
            {/* <Link className='option' to='/teacher'>
                Teacher Site
            </Link> */}            
        </div>

        <div className="socialmedia">
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
        </div>
    </div>
);

export default Navbar;