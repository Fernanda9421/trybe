import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super()

    this.messageOne = this.messageOne.bind(this);
    this.messageTwo = this.messageTwo.bind(this);
    this.messageThree = this.messageThree.bind(this);

    this.state = {
      clickNumber1: 0,
      clickNumber2: 0,
      clickNumber3: 0,
    }
  }

  messageOne() {
    this.setState((previousState, _props) => ({
      clickNumber1: previousState.clickNumber1 + 1
    }), () => {
      console.log(`Cor Botão 1: ${this.valueBtn(this.state.clickNumber1)}`)
    });
  }

  messageTwo() {
    this.setState((previousState, _props) => ({
      clickNumber2: previousState.clickNumber2 + 1
    }), () => {
      console.log(`Cor Botão 2: ${this.valueBtn(this.state.clickNumber2)}`)
    })
  }

  messageThree() {
    this.setState((previousState, _props) => ({
      clickNumber3: previousState.clickNumber3 + 1
    }), () => {
      console.log(`Cor Botão 3: ${this.valueBtn(this.state.clickNumber3)}`)
    })
  }

  valueBtn(number) {
    return number % 2 === 0 ? 'green' : 'white';
  }

  render() {
    const { clickNumber1, clickNumber2, clickNumber3 } = this.state;

    return (
      <section className='section-buttons'>
        <h1>Handle Click</h1>
        <button className='button'
          onClick={this.messageOne}
          style={{ backgroundColor: this.valueBtn(clickNumber1) }}
        >
          {clickNumber1}
        </button>

        <button className='button'
          onClick={this.messageTwo}
          style={{ backgroundColor: this.valueBtn(clickNumber2) }}
        >
          {clickNumber2}
        </button>

        <button className='button'
          onClick={this.messageThree}
          style={{ backgroundColor: this.valueBtn(clickNumber3) }}
        >
          {clickNumber3}
        </button>
      </section>
    );
  }
}

export default App;
