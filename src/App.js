import React from 'react';
import { Switch, Route } from 'react-router-dom';

import navbar from './components/navbar/navbar.component';
import HomePage from './pages/homepage/homepage.page';
import Blog from './pages/blog/blog.page';
import Portfolio from './pages/portfolio/portfolio.page';

import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = [];
  }

  render() {
    return (
        <div>
          <navbar />
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/blog' component={Blog} />
            <Route path='/portfolio' component={Portfolio} />
          </Switch>
        </div>
    );
  }
}

export default App;
