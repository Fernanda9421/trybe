const { expect } = require('@jest/globals');
const service = require('./service');

test('Testa a função randomNumber', () => {
  service.randomNumber = jest.fn().mockReturnValue(10);

  expect(service.randomNumber()).toBe(10);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

test('Testa nova funcionalidade da função', () => {
  service.randomNumber = jest.fn().mockImplementationOnce((num1, num2) => num1 / num2);

  expect(service.randomNumber(100, 5)).toBe(20);
  expect(service.randomNumber).toHaveBeenCalled();
  expect(service.randomNumber).toHaveBeenCalledWith(100, 5);
  expect(service.randomNumber).toHaveBeenCalledTimes(1);
});

describe('Testa implementações', () => {
  it('Retorna multiplicação dos parâmetros', () => {
    service.randomNumber = jest.fn().mockImplementation((num1, num2, num3) => num1 * num2 * num3);
    expect(service.randomNumber(100, 5, 2)).toBe(1000);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toBeCalledWith(100, 5, 2);
    expect(service.randomNumber).toBeCalledTimes(1);
  });
  
  it('Reseta implementação e cria nova que retorna o dobro do valor' , () => {
    service.randomNumber.mockReset();
    expect(service.randomNumber).toBeCalledTimes(0);
    service.randomNumber = jest.fn().mockImplementation((number) => number * 2);
    expect(service.randomNumber(10)).toBe(20);
    expect(service.randomNumber).toHaveBeenCalled();
    expect(service.randomNumber).toHaveBeenCalledWith(10);
    expect(service.randomNumber).toHaveBeenCalledTimes(1);
  })
})

