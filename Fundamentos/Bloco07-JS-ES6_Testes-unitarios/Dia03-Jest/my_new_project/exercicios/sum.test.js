const sum = require('./sum');

describe('Testar a função sum', () => {
  it(`teste se o retorno de sum(4,5) é 9`, () => {
    expect(sum(4, 5)).toBe(9);
  });
  it(`retorno de sum(0, 0) é 0`, () => {
    expect(sum(0, 0)).toBe(0);
  });
  it(`se a função sum(4, '5') lança um erro`, () => {
    expect(() => sum(4, '5')).toThrow();
  });
  it(`se a função sum(4, '5') mostra a mensagem de erro 'parameters must be numbers'`, () => {
    expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
  });
});
