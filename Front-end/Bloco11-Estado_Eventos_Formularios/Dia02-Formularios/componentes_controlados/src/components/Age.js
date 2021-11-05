import React, { Component } from "react";

class Age extends Component {
  render() {
    const { age, handleChange } = this.props;

    return (
      <label htmlFor='age'>
        Idade:
        <input
          value={age}
          type='number'
          name='age'
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Age;
