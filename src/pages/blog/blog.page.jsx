import React from 'react';

import './blog.style.scss';

import twitter from '../../assets/twitter.png';
import devto from '../../assets/devto.png';
import blogger from '../../assets/blogger.png';


import Navbar from '../../components/navbar/navbar.component';

// import { render } from '@testing-library/react';
// import { FaDev, FaTwitter, FaBlogger } from 'react-icons/fa';

class Blog extends React.Component {
    constructor() {
        super();
        this.state = [];
      }
    render(){
        return (
            <>
                <Navbar />
                <h1 id="head">Ok, not a blog, but stuff I've written elsewhere</h1>
                <div id="main-content">
                    <div id="twitter">
                        <a href="http://twitter.com/wolf_math">
                            <img className='linkpage' src={twitter} alt="Twitter" />
                        </a>
                        {/* <FaTwitter className="icon" /> */}
                    </div>
                    <div id="dev">
                        <a href="https://dev.to/wolfmath">
                            <img className='linkpage' src={devto} alt="Dev.to" />
                        </a> 
                        {/* <FaDev className="icon" /> */}
                    </div>
                    <div id="blog">
                        <a href="http://www.roboticwolf.com">
                            <img className='linkpage' src={blogger} alt="Blogger" />
                        </a>
                        {/* <FaBlogger className="icon" /> */}
                    </div>
                </div>
            </>
        )
    }
}

export default Blog;