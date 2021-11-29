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