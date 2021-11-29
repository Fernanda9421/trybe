import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('altera valor dos campos e testa o valor guardado', () => {
  render (<App />);
  const inputNome = screen.getByRole('textbox', { name: /nome/i });
  expect(inputNome).toBeInTheDocument();
  expect(inputNome).toHaveValue('');

  const valueInputNome = 'Estudante da Trybe';
  userEvent.type(inputNome, valueInputNome);
  expect(inputNome).toHaveValue(valueInputNome);
});