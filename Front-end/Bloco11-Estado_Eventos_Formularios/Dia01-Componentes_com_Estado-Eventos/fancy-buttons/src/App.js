import './App.css';
import React, { Component } from 'react';

const messageOne = () => {
  console.log('Botão 1: clicado')
}

const messageTwo = () => {
  console.log('Botão 2: clicado')
}

const messageThree = () => {
  console.log('Botão 3: clicado')
}

class App extends Component {
  render() {
    return (
      <>
      <button onClick={messageOne}>Botão 1</button>
      <button onClick={messageTwo}>Botão 2</button>
      <button onClick={messageThree}>Botão 3</button>
      </>
    );
  }
}

export default App;
