import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Link } from 'react-router-dom';
import { Route } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import HowTo from './components/HowTo';
import Profile from './components/Profile';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/howto'>How To</Link></li>
            <li><Link to='/profile'>Profile</Link></li>
          </ul>
        </nav>
        <Route path='/about' component={About} />
        <Route path='/howto' component={HowTo} />
        <Route path='/profile/:city' render={(props) => <Profile {...props} name='Fernanda Andrade de Carvalho' />} />
        <Route exact path='/' component={Home} />
      </BrowserRouter>
    );
  }
}

export default App;
