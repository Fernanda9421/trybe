import React, { Component } from 'react';
import LoadingContext from './LoadingContext';

class Provider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      message: null,
    }
  }

  showLoading = message => this.setState({
    loading: true,
    message,
  });

  hideLoading = () => this.setState({ loading: false })

  render() {
    const context = {
      ...this.state,
      showLoading: this.showLoading,
      hideLoading: this.hideLoading,
    }

    const { children } = this.props;
    return (
      <LoadingContext.Provider value={ context }>
        {children}
      </LoadingContext.Provider>
    );
  }
}

export default Provider;
