const numbers = require('./verificaNumeros');

describe('Requisito 1', () => {
  it(`numbers recebe [1,2,3,4,5] e retorna true`, () => {
    expect(numbers([1,2,3,4,5])).toEqual(true);
  });

  it(`numbers recebe [1,2,'3',4,5] e retorna false`, () => {
    expect(numbers([1,2,'3',4,5])).toEqual(false);
  });

  it(`numbers recebe [' '] e retona false`, () => {
    expect(numbers([' '])).toEqual(false);
  });
});