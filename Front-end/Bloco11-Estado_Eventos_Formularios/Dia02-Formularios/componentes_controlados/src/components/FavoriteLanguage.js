import React, { Component } from "react";

class FavoriteLanguage extends Component {
  render() {
    const { favoriteLanguage, handleChange } = this.props;

    return (
      <label htmlFor='favoriteLanguage'>
        Linguagem de programação preferida:
        <select
          value={favoriteLanguage}
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
