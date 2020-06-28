import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

import './homepage.style.scss';

import logo from '../../assets/wolf-logo_D5.png';

const HomePage = () => (
    <div className='homepage'>
        <div className="main-content">
            <div className="mainlogo">
                <img id='logo' src={logo} alt="Logo" />;
                <div className="title">
                    <h1>Aaron Wolf</h1>
                    <h3>web developer</h3>
                </div>
            </div>
            <FaChevronDown id="more" />

            <div id="pages">
                <div id="projects">
                    
                </div>
                <div id="Blog">

                </div>
                <div id="Teacher Site">

                </div>

            </div>
        </div>
    </div>
)

export default HomePage;