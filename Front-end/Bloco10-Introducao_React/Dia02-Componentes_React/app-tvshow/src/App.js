import './App.css';
import React, { Component } from 'react';
import catalog from './data';
import TvShowList from './Components/TvShowList';
import Header from './Components/Header';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <TvShowList catalog={catalog} />
      </>
    )
  }
}

export default App;
