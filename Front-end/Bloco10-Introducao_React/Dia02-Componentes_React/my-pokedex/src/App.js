import { Component } from 'react';
import './App.css';
import pokemons from './Data';
import Pokedex from './Pokedex';


class App extends Component {
  render() {
    return (
      <>
        <h1 className='title'>Pokedex</h1>
        <div className='list-pokemons'>
          <Pokedex pokemons={pokemons} />
        </div>
      </>
    )
  }
}

export default App;
