import React, { Component, Fragment } from 'react';
import LoadingContext from '../context/LoadingContext';
import { getDepartments } from '../services/api';
import Loading from './Loading';

class Departments extends Component {
  getDepartments = async () => {
    const { showLoading, hideLoading } = this.context;

    showLoading('Carregando departamentos');

    const response = await getDepartments().then(response => {
      hideLoading();
      return response;
    })
    console.log(response);
  }

  render() {
    return (
      <Fragment>
        <button onClick={this.getDepartments}>Buscar departamentos</button>
        <Loading />
      </Fragment>
    )
  }
}

Departments.contextType = LoadingContext;

export default Departments;
