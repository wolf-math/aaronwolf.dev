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
                <h1>Under Construction</h1>
            </>
        )
    }
}

export default Portfolio;