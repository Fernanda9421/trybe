import React, { Component } from "react";
import PropTypes from 'prop-types';

class Age extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor='age'>
        Idade:
        <input
          value={value}
          type='number'
          name='age'
          onChange={handleChange}
        />
      </label>
    );
  }
}

Age.propTypes = {
  value: PropTypes.number.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default Age;
