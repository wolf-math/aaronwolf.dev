import React from 'react';
import { Link } from 'react-router-dom';

// import logo from '../../assets/wolf-logo_D5.png';

import './navbar.style.scss';

const Navbar = () => (
    <div className='navbar'>

        {/* <Link id='navlogo' to  ='/'>
            <img id='lowgo' src={logo} alt="Logo" />
        </Link> */}

        <div id='options'>
            <Link className='option' to='/'>
                Home
            </Link>
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

        <div className="socialmedia">

        </div>
    </div>
);

export default Navbar;