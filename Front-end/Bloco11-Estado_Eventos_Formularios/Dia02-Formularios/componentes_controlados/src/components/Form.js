import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: 0,
      favoriteLanguage: '',
      comments: '',
      receiveContent: false,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

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

          <label>
            Deseja receber conteúdos?
            <input type='checkbox' name='receiveContent' onChange={this.handleChange}></input>
          </label>

        </form>
      </div>
    )
  }
}

export default Form;