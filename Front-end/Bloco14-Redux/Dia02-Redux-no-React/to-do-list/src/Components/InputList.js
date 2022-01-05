import React, { Component } from 'react';

class InputList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }
  }

  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={ (event) => this.setState ({ inputValue: event.target.value }) }
        />
        <button type="button" onClick={ () => {} }>
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

export default InputList;
