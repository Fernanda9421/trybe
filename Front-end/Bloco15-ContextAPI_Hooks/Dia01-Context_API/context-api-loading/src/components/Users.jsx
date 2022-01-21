import React, { Component, Fragment } from 'react';
import { getUsers } from '../services/api';
import LoadingContext from '../context/LoadingContext';
import Loading from './Loading';

class Users extends Component {
  getUsers = async () => {
    const { showLoading, hideLoading } = this.context;

    showLoading('Carregando usuários');

    const response = await getUsers().then(response => {
      hideLoading();
      return response;
    })
    console.log(response);
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.getUsers}>Buscar usuários</button>
        <Loading />
      </Fragment>
    )
  }
}

Users.contextType = LoadingContext;

export default Users;
