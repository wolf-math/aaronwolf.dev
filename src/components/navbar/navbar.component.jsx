import React from 'react';
import { Link } from 'react-router-dom';

import {ReactComponent as Logo } from '../../assets/wolf-logo_D5.png';

import './navbar.style.scss';

const navbar = () => (
    <div className='navbar'>
        <Link className='logo-container' to  ='/'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/projects'>
                Projects
            </Link>
            <Link className='option' to='/teacher'>
                Teacher Site
            </Link>
            <Link className='option' to='/blog'>
                Blog
            </Link>

        </div>

    </div>
);

export default navbar;