import { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex';


class App extends Component {
  render() {
    return (
      <>
        <h1 className='title'>Pokedex</h1>
        <div className='list-pokemons'>
          <Pokedex  />
        </div>
      </>
    )
  }
}

export default App;
