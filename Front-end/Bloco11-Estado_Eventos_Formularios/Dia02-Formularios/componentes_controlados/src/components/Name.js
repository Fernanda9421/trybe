import React, { Component } from "react";
import PropTypes from 'prop-types';

class Name extends Component {
  render() {
    const { value, handleChange } = this.props;

    let error = undefined;
    if (value.length > 100) error = 'Você atingiu o número máximo de caracteres!'

    return (
      <label htmlFor='name'>
        Nome:
        <input
          value={value}
          type='text'
          name='name'
          onChange={handleChange}
        />

        {error ? error : ''}
      </label>
    );
  }
}

Name.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Name;
