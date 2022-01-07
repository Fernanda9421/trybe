import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5 }}});

    expect(screen.getByText('5')).toBeInTheDocument();
  });

  test('a click on the button works', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.queryByText(/clique aqui/i);

    expect(screen.getByText('0')).toBeInTheDocument();
    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('start the counter with another value', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const value = screen.getByText('10');
    expect(value).toBeInTheDocument();

    const buttonAdicionar = screen.queryByText(/clique aqui/i);
    userEvent.click(buttonAdicionar);
    const newValue = screen.getByText('11');
    expect(newValue).toBeInTheDocument();
  })
});
