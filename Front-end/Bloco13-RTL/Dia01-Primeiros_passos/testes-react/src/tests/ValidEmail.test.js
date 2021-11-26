import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from '../components/ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});

test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER }/>);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});

test('Verifica se texto "Email Váilido" não é exibido antes do clique no botão', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByTestId('valid-email');
  expect(isValid).not.toBeInTheDocument();
});

test('Verifica se texto "Email Inválido" não é exibido antes do clique no botão', () => {
  const EMAIL_USER = '';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isInvalid = screen.queryByTestId('invalid-email');
  expect(isInvalid).not.toBeInTheDocument();
});

test('Verifica se o texto "Email Váilido" é verde', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.queryByTestId('valid-email');
  expect(isValid).toHaveAttribute('id', 'valid');
});

test('Verifica se o texto "Email Válido" é vermelho', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isInvalid = screen.queryByTestId('invalid-email');
  expect(isInvalid).toHaveAttribute('id', 'invalid');
});
