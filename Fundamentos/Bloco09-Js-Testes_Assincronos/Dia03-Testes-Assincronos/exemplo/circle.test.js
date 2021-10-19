const { expect } = require("@jest/globals");

let cities = [];

const addCity = (city) => {
  cities.push(city);
};

const removeCity = (city) => {
  cities = cities.filter((eachCity) => eachCity !== city);
};

beforeEach(() => {
  cities = ['Pindamonhangaba'];
});

afterEach(() => {
  cities = [];
});

test('Testa a função addCity', () => {
  expect.assertions(5);
  addCity('Campinas');
  addCity('Goiania');
  addCity('Recife');
  expect(cities).toHaveLength(4);
  expect(cities).toContain('Campinas');
  expect(cities).toContain('Goiania');
  expect(cities).toContain('Recife');
  expect(cities).toContain('Pindamonhangaba');
});

test('Testa a função removeCity', () => {
  expect.assertions(1);
  removeCity('Pindamonhangaba');
  expect(cities).toHaveLength(0);
});


test('Testa a função addCity utilizando o beforeEach', () => {
  expect.assertions(3);
  addCity('Piraporinha');
  expect(cities).toHaveLength(2);
  expect(cities).toContain('Pindamonhangaba');
  expect(cities).toContain('Piraporinha');
});

test('Testa a função removeCity utilizando o beforeEach', () => {

  removeCity('Pindamonhangaba');
  expect(cities).not.toContain('Pindamonhangaba');
  expect(cities).toHaveLength(0);
  expect.assertions(2);
});
