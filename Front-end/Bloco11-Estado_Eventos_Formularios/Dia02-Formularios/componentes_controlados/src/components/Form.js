import React, { Component } from "react";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      nome: '',
      idade: 0,
      linguagemFavorita: '',
      comentario: '',
    }

    this.trocaComentario = this.trocaComentario.bind(this);
  }

  trocaComentario(event) {
    this.setState({
      comentario: event.target.value
    })
  }

  render() {
    const { comentario } = this.state;

    return (
      <div>
        <h1>Linguagens de programação</h1>
        <form className='form'>
          <label>
            Nome:
            <input type='text' name='nome'></input>
          </label>

          <label>
            Idade:
            <input type='number' name='idade'></input>
          </label>

          <label>
            Linguagem de programação preferida:
            <select name='linguagemFavorita'>
              <option>Python</option>
              <option>Java</option>
              <option>JavaScript</option>
              <option>C++</option>
            </select>
          </label>

          <label>
            Deixe seu comentário:
            <textarea value={comentario} onChange={this.trocaComentario}></textarea>
          </label>

        </form>
      </div>
    )
  }
}

export default Form;