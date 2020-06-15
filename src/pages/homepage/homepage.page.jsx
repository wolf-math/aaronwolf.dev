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
        </div>
    </div>
)

export default HomePage;