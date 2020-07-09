import React from 'react';

import './blog.style.scss'

import Navbar from '../../components/navbar/navbar.component';

import { render } from '@testing-library/react';

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
                        <li>on <a href="http://roboticwolf.com">Blogger</a>"</li>
                        <li>on <a href="https://dev.to/wolfmath">dev.to</a></li>
                        <li>on <a href="http://twitter.com/wolf_math">Twitter</a></li>
                    </ul>

                </div>

            </>
        )
    }
}

export default Blog;