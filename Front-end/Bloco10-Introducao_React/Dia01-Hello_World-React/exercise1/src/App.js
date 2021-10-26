import React, { Component } from 'react';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const appointments = ['Passear com o cachorro', 'Lavar Louça', 'Limpar a casa', 'Fazer almoço', 'Estudar']

class App extends Component {
  render() {
    return (
      <>
      <h1>Lista de tarefas:</h1>
      <ul>{ appointments.map((appointment) => Task(appointment)) }</ul>
      </>
    );
  }
}

export default App;
