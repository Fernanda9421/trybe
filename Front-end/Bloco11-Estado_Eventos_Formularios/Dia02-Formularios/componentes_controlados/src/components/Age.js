import React, { Component } from "react";

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

export default Age;
