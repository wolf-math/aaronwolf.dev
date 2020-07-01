import React from 'react';
import { Link } from 'react-router-dom';

import { FaChevronDown } from 'react-icons/fa';

import './homepage.style.scss';

import logo from '../../assets/wolf-logo_D5.png';
import teacher from '../../assets/wolf-logo_D6.png';
import pixel from '../../assets/logo_pixel_large.png'

const HomePage = () => (
    <>
    <div className='homepage'>
        <div id="greeting">
            <div id="mainlogo">
                <img id='logo' src={logo} alt="Logo" />;
                <div className="title">
                    <h1>Aaron Wolf</h1>
                    <h3>web developer</h3>
                </div>
            </div>
            <FaChevronDown id="more" />
        </div>

        <div id="pages">       
            <Link to='/projects' className="page" id="projects">
                <img className='linkLogo' src={teacher} alt="Projects" />
                Projects
            </Link>
            <Link className="page" id="blog" to='/blog'>
                <img className='linkLogo' src={pixel} alt="Blog" />;
                Blog
            </Link>
            <Link className="page" id="teacher" to='/teacher'>
                {/* <img className='linkLogo' src={teacher} alt="Projects" />; */}
                Teacher Site
            </Link>
        </div>   
    </div>
    </>
)

export default HomePage;