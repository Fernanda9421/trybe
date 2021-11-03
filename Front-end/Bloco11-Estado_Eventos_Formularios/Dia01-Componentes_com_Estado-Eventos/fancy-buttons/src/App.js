import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.messageOne = this.messageOne.bind(this);
    this.messageTwo = this.messageTwo.bind(this);
    this.messageThree = this.messageThree.bind(this);
  }

  messageOne() {
    console.log('Botão 1: clicado')
  }

  messageTwo() {
    console.log('Botão 2: clicado')
  }

  messageThree() {
    console.log('Botão 3: clicado')
  }

  render() {
    return (
      <>
      <button onClick={this.messageOne}>Botão 1</button>
      <button onClick={this.messageTwo}>Botão 2</button>
      <button onClick={this.messageThree}>Botão 3</button>
      </>
    );
  }
}

export default App;
