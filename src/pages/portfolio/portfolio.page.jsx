import React from 'react';

import './portfolio.style.scss'

import Navbar from '../../components/navbar/navbar.component';

class Portfolio extends React.Component {
    constructor() {
        super();
        this.state = [];
    }
    render(){
        return(
            <>
            <Navbar />
            <div id="portfolio">
                <h1>Under Construction</h1>
                <p>In the mean time, feel free to check out my <a href="http://github.com/wolf-math"
                target="_blank"
                rel="noopener noreferrer">
                    GitHub</a> page!</p>
            </div>
            </>
        )
    }
}

export default Portfolio;