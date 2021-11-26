import React, { Component } from 'react';
import './App.css';
import ValidEmail from './components/ValidEmail';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      saveEmail: '',
    };
  }

  changeEmail = ({ target }) => {
    const { name } = target;
    const value = target.value;
    this.setState({ [name]: value });
  }

  changeSaveEmail(value) {
    this.setState({ saveEmail: value, email: '' });
  }

  render() {
    const { email, saveEmail } = this.state;
    return (
      <div className="App">
        <label htmlFor="id-email">
          Email
          <input
            id="id-email"
            name="email"
            value={ email }
            type="email"
            onChange={ this.changeEmail }
          />
        </label>
        <input
          id="btn-enviar"
          type="button"
          data-testid="id-send"
          value="Enviar"
          onClick={ () => this.changeSaveEmail(email) }
        />
        <input id="btn-id" type="button" value="Voltar" />
        <ValidEmail email={ saveEmail } />
      </div>
    );
  }
}

export default App;
