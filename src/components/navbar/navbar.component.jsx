import React from 'react';
import { Link } from 'react-router-dom';
import {links, pages} from '../../links'

import './navbar.style.scss';

const Navbar = () => (
    <div className='navbar'>
        <div id='options'>
            <Link className='option' to='/'>
                Home
            </Link>
            {pages.map(page =>  (
                <Link className='option' to={`/${page.name}`} key={page.name}>
                    {page.name}
                </Link>
            ))}
        </div>

        <div className="socialMedia">
            {links.map(link => (
                <a href={link.location}
                  key="link.name"
                  target="_blank"
                  rel="noopener noreferrer">
                      <div className="navIcon">
                        {link.icon}
                      </div>
                  </a>
            ))}
        </div>
    </div>
);

export default Navbar;