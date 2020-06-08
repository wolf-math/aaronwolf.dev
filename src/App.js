import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
    </div>
  );
}

export default App;
  