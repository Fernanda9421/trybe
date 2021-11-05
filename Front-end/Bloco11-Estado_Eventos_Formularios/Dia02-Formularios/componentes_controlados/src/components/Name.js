import React, { Component } from "react";

class Name extends Component {
  render() {
    const { name, handleChange } = this.props;

    return (
      <label htmlFor='name'>
        Nome:
        <input
          value={name}
          type='text'
          name='name'
          onChange={handleChange}
        />
      </label>
    );
  }
}

export default Name;
