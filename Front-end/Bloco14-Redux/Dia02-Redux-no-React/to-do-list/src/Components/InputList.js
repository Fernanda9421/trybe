import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addElement } from '../actions';

class InputList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    }
  }

  render() {
    const { add } = this.props;
    const { inputValue } = this.state;

    return (
      <div>
        <input
          type="text"
          placeholder="Digite a tarefa"
          onChange={ (event) => this.setState ({ inputValue: event.target.value }) }
        />
        <button type="button" onClick={ () => add(inputValue) }>
          Adicionar Tarefa
        </button>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  add: (value) => dispatch(addElement(value)),
})

export default connect(null, mapDispatchToProps)(InputList);
