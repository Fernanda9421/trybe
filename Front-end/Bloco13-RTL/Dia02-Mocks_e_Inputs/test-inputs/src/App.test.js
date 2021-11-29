import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('altera valor do campo de nome e verifica valor guardado', () => {
  render (<App />);
  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');

  const valueInputNome = 'Estudante da Trybe';
  userEvent.type(inputNome, valueInputNome);
  expect(inputNome).toHaveValue(valueInputNome);
});

test('Testa campo de email e verifica valor guardado', () => {
  render(<App />);
  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');

  const valueInputEmail = 'email@trybe.com';
  userEvent.type(inputEmail, valueInputEmail);
  expect(inputEmail).toHaveValue(valueInputEmail);
});
