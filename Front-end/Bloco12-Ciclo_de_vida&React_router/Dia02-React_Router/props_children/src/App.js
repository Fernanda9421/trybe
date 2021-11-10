import React, { Component } from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import HowTo from './components/HowTo';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/about' component={About} />
        <Route path='/howto' component={HowTo} />
        <Route path='/profile' component={Profile} />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
