import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/homepage/homepage.page';
import Blog from './pages/blog/blog.page';
import Portfolio from './pages/portfolio/portfolio.page';
import About from './pages/about/about.page';

import './App.css';

const App = () => {
    return (
        <div className="app">
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/blog' component={Blog} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/about' component={About} />
          </Switch>
        </div>
    );
}

export default App;
