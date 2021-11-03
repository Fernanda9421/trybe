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
    }))
  }

  messageTwo() {
    this.setState((previousState, _props) => ({
      clickNumber2: previousState.clickNumber2 + 1
    }))
  }

  messageThree() {
    this.setState((previousState, _props) => ({
      clickNumber3: previousState.clickNumber3 + 1
    }))
  }

  render() {
    return (
      <>
      <button onClick={this.messageOne}>{this.state.clickNumber1}</button>
      <button onClick={this.messageTwo}>{this.state.clickNumber2}</button>
      <button onClick={this.messageThree}>{this.state.clickNumber3}</button>
      </>
    );
  }
}

export default App;
