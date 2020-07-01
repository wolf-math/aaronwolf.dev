import React from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

import './homepage.style.scss';

import logo from '../../assets/wolf-logo_D5.png';
import teacher from '../../assets/wolf-logo_D6.png';

const HomePage = () => (
    <>
    <div className='homepage'>
        <div className="greeting">
            <div className="mainlogo">
                <img id='logo' src={logo} alt="Logo" />;
                <div className="title">
                    <h1>Aaron Wolf</h1>
                    <h3>web developer</h3>
                </div>
            </div>
            <FaChevronDown id="more" />
        </div>

        <div id="pages">
            <div id="projects">
                <Link to='/projects'>
                    {/* <img className='linkLogo' src={projects} alt="Projects" />; */}
                    Projects
                </Link>
            </div>
            <div id="blog">        
                <Link to='/blog'>
                    {/* <img className='linkLogo' src={blog} alt="Blog" />; */}
                    Blog
                </Link>
            </div>
            <div id="teacher">
                <Link to='/teacher'>
                    <img className='linkLogo' src={teacher} alt="Projects" />;
                    Teacher Site
                </Link>
            </div>
        </div>   
    </div>
    </>
)

export default HomePage;