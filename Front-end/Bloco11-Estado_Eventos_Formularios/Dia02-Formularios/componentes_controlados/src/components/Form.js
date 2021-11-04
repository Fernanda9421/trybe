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
    const { name, age, favoriteLanguage, comments, receiveContent } = this.state;

    return (
      <div>
        <h1>Linguagens de programação</h1>
        <form className='form'>
          <fieldset>
            <legend>Informações pessoais</legend>

            <label htmlFor='name'>
              Nome:
              <input
                value={name}
                type='text'
                name='name'
                onChange={this.handleChange}
              />
            </label>

            <label htmlFor='age'>
              Idade:
              <input
                value={age}
                type='number'
                name='age'
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Preferências</legend>
            <label htmlFor='favoriteLanguage'>
              Linguagem de programação preferida:
              <select
                value={favoriteLanguage}
                name='favoriteLanguage'
                onChange={this.handleChange}
              >
                <option>Python</option>
                <option>Java</option>
                <option>JavaScript</option>
                <option>C++</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Comentários</legend>
            <label htmlFor='comments'>
              Deixe seu comentário:
              <textarea
                value={comments}
                name='comments'
                onChange={this.handleChange}
              />
            </label>
          </fieldset>

          <fieldset>
            <legend>Adicionar imagens</legend>
            <input type="file" />
          </fieldset>

          <label htmlFor='receiveContent'>
            Deseja receber conteúdos?
            <input
              value={receiveContent}
              type='checkbox'
              name='receiveContent'
              onChange={this.handleChange}
            />
          </label>

        </form>
      </div>
    )
  }
}

export default Form;