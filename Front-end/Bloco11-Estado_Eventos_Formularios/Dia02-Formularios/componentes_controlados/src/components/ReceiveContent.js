import React, { Component } from "react";
import PropTypes from 'prop-types';

class ReceiveContent extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor='receiveContent'>
        Deseja receber conteúdos?
        <input
          value={value}
          type='checkbox'
          name='receiveContent'
          onChange={handleChange}
        />
      </label>
    );
  }
}

ReceiveContent.propTypes = {
  value: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default ReceiveContent;
