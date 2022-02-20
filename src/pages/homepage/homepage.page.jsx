import React from 'react';
import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';

import { FaAngleDoubleDown, FaDev, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

import './homepage.style.scss';

import logo from '../../assets/wolf-logo_D5.png';
import glasses from '../../assets/wolf-logo_D6.png';
import pixel from '../../assets/logo_pixel_large.png'
import robot_wolf from '../../assets/robot_logo.png';
import hardhat from '../../assets/hardhat_logo.png';


const HomePage = () => {

    const pages = [
        {name: "about", logo: robot_wolf, text: 'About.'},
        {name: "portfolio", logo: hardhat, text: 'Portfolio'},
        {name: "blog", logo: glasses, text: 'Blog.'},
        {name: "contact", logo: pixel, text: 'Contact.'}
    ]

    const links = [
        {name: "dev.to", location: 'https://dev.to/wolfmath', icon: <FaDev className="icon" />},
        {name: 'linkedin', location: 'https://www.linkedin.com/in/wolf-math/', icon:<FaLinkedin className="icon" />  },
        {name: 'github', location: 'https://github.com/wolf-math', icon: <FaGithub className="icon" /> },
    ]

    return (
        <div className="home-background">
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
                        <FaAngleDoubleDown id="more" /> 
                    </Scroll>
                </div>

                <div id="pages">
                    {pages.map((page, i) => (
                        <a className="page" id={page.name} href={`/${page.name}`} key={i}>
                            <img className='linkLogo' src={page.logo} alt={page.name} />
                            <h3 className="description typewriter">{page.text}</h3>
                        </a>
                    ))}
                </div>

                <div id="icons">
                    {links.map(link => (
                        <a href={link.location}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={link.name}
                        >
                            {link.icon}
                        </a>
                    ))}
                    <Link to="/contact">
                        <FaEnvelope className="icon" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;