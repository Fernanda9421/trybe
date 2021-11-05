import React, { Component } from "react";

class ReceiveContent extends Component {
  render() {
    const { receiveContent, handleChange } = this.props;

    return (
      <label htmlFor='receiveContent'>
        Deseja receber conteúdos?
        <input
          value={receiveContent}
          type='checkbox'
          name='receiveContent'
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default ReceiveContent;
