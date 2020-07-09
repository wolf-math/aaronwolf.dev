import React from 'react';

import './blog.style.scss'

import Navbar from '../../components/navbar/navbar.component';

import { render } from '@testing-library/react';
import { FaDev, FaTwitter, FaBlogger } from 'react-icons/fa';

class Blog extends React.Component {
    constructor() {
        super();
        this.state = [];
      }
    render(){
        return (
            <>
                <Navbar />
                <div id="main-content">
                    <h1>Under Construction</h1>
                    <p>In the meantime, feel free to check out some of my writing </p>
                    <ul>
                        <li id="blog">on <a href="http://www.roboticwolf.com">Blogger</a> <FaBlogger className="icon" /></li>
                        <li id="dev">on <a href="https://dev.to/wolfmath">dev.to</a> <FaDev className="icon" /></li>
                        <li id="twitter">on <a href="http://twitter.com/wolf_math">Twitter</a> <FaTwitter className="icon" /> </li>
                    </ul>
                </div>
            </>
        )
    }
}

export default Blog;