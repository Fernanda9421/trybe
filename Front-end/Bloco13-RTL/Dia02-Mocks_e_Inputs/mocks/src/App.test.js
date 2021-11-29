import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

//  Faz com que, após cada teste, o mock seja limpo.
afterEach(() => jest.clearAllMocks());

it('fetches a joke', async () => {
  // A constante joke cria um objeto similar ao que é retornado da API
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  // O jest.spyon espiona as chamadas a função fetch do objeto global
  // Quando a função fetch for chamada, ao invés de fazer uma requisição a uma API externa será chamando nosso mock .
  jest.spyOn(global, 'fetch');
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });

  render(<App />);
  const renderedJoke = await screen.findByText('Whiteboards ... are remarkable.');
  expect(renderedJoke).toBeInTheDocument();
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    { headers: { Accept: 'application/json' } },
  );
});
