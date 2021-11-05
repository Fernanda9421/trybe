import React, { Component } from "react";

class FavoriteLanguage extends Component {
  render() {
    const { value, handleChange } = this.props;

    return (
      <label htmlFor='favoriteLanguage'>
        Linguagem de programação preferida:
        <select
          value={value}
          name='favoriteLanguage'
          onChange={handleChange}
        >
          <option>Python</option>
          <option>Java</option>
          <option>JavaScript</option>
          <option>C++</option>
        </select>
      </label>
    );
  }
}

export default FavoriteLanguage;
