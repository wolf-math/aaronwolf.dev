import React from 'react';
import {links, pages} from '../../links'
import { Link } from 'react-router-dom';
import { FaAngleDoubleDown, FaEnvelope } from 'react-icons/fa';
import './homepage.style.scss';
import logo from '../../assets/wolf-logo_D5.png';

const HomePage = () => {
    
    const scroll = () => {
        pages.current.scrollIntoView({ behavior: "smooth" });
    }

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
                    <FaAngleDoubleDown id="more" onClick={scroll} /> 
                </div>

                <div id="pages" ref={pages}>
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
                        <div className="icon">
                            {link.icon}
                        </div>
                        </a>
                    ))}
                    <Link to="/contact">
                    <div className="icon">
                            <FaEnvelope  />
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
