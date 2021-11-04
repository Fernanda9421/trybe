import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: 0,
      favoriteLanguage: '',
      comments: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;

    this.setState({
      [name]: value,
    })
  }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1>Linguagens de programação</h1>
        <form className='form'>
          <label>
            Nome:
            <input type='text' name='name' onChange={this.handleChange}></input>
          </label>

          <label>
            Idade:
            <input type='number' name='age' onChange={this.handleChange}></input>
          </label>

          <label>
            Linguagem de programação preferida:
            <select name='favoriteLanguage' onChange={this.handleChange}>
              <option>Python</option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>C++</option>
            </select>
          </label>

          <label>
            Deixe seu comentário:
            <textarea name='comments' onChange={this.handleChange}></textarea>
          </label>

        </form>
      </div>
    )
  }
}

export default Form;