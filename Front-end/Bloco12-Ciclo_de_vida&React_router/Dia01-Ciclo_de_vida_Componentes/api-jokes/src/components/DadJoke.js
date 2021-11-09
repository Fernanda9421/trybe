import React, { Component } from 'react';

class DadJoke extends Component {
  constructor() {
    super();

    this.state = {
      jokeObj: undefined,
      loading: true,
      storedJokes: [],
    }

    this.saveJoke = this.saveJoke.bind(this);
    this.renderJokeElement = this.renderJokeElement.bind(this);
  }

  async fetchJoke() {
    const requestHeaders = { headers: { Accept: 'application/json' } };
    const requestReturn = await fetch('https://icanhazdadjoke.com/', requestHeaders);
    const requestObject = await requestReturn.json();

    this.setState({
      jokeObj: requestObject,
    })
  }

  componentDidMount() {
    this.fetchJoke();
  }

  saveJoke() {
    //
  }

  renderJokeElement() {
    return (
      <div>
        <p>{this.state.jokeObj.joke}</p>
        <button type="button" onClick={this.saveJoke}>
          Salvar piada!
        </button>
      </div>
    );
  }

  render() {
    const { storedJokes, jokeObj } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>
        <span>
          {storedJokes.map(({ id, joke }) => (<p key={id}>{joke}</p>))}
        </span>

        <p>{ jokeObj === undefined ? loadingElement : this.renderJokeElement() }</p>

      </div>
    );
  }
}

export default DadJoke;
