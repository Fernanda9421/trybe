import React, { Component } from "react";
import Name from "./Name";
import Age from "./Age";
import FavoriteLanguage from "./FavoriteLanguage";
import Comments from "./Comments";
import ReceiveContent from "./ReceiveContent";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      age: 0,
      favoriteLanguage: '',
      comments: '',
      receiveContent: false,
      formError: true,
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleError() {
    const { name, age, favoriteLanguage, comments, receiveContent } = this.state;

    const errors = [
      !name.length,
      !age.length,
      !favoriteLanguage.length,
      !comments.length,
      !receiveContent,
    ];

    const completedForm = errors.every((error) => error !== true);

    this.setState({
      formError: !completedForm
    });
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => { this.handleError() })
  }

  render() {
    const { name, age, favoriteLanguage, comments, receiveContent, formError } = this.state;

    return (
      <div>
        <h1>Linguagens de programação</h1>
        <form className='form'>
          <fieldset>
            <legend>Informações pessoais</legend>
            <Name value={name} handleChange={this.handleChange} />
            <Age value={Number(age)} handleChange={this.handleChange} />  
          </fieldset>

          <fieldset>
            <legend>Preferências</legend>           
            <FavoriteLanguage value={favoriteLanguage} handleChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <legend>Comentários</legend> 
            <Comments value={comments} handleChange={this.handleChange} />
          </fieldset>

          <fieldset>
            <legend>Adicionar imagens</legend>
            <input type="file" />
          </fieldset>

          <ReceiveContent value={receiveContent} handleChange={this.handleChange} />

        </form>

        { formError 
        ? <span style={ { color: 'red' } }>Preencha todos os campos</span>
        : <span style={ { color: 'green' } }>Todos campos foram preenchidos</span> }
      </div>
    )
  }
}

export default Form;