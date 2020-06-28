import React from 'react';

import Navbar from '../../components/navbar/navbar.component'
import { render } from '@testing-library/react';

class Blog extends React.Component {
    constructor() {
        super();
        this.state = [];
      }
    render(){
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}

export default Blog;