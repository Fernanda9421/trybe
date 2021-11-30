const serviceTwo = require('./serviceTwo');
jest.mock('./serviceTwo');

describe('Testa implementações', () => {
  it('Verifica se a string retorna em caixa baixa', () => {
    serviceTwo.upperCase = jest.fn().mockImplementation((string) => string.toLowerCase());
    expect(serviceTwo.upperCase('CAMELO')).toBe('camelo');
    expect(serviceTwo.upperCase).toHaveBeenCalled();
    expect(serviceTwo.upperCase).toHaveBeenCalledWith('CAMELO');
    expect(serviceTwo.upperCase).toHaveBeenCalledTimes(1);
  });

  it('Verifica se retorna a ultima letra da string', () => {
    serviceTwo.firstLetter = jest.fn().mockImplementation((stringTwo) => stringTwo.slice(-1));
    expect(serviceTwo.firstLetter('camelo')).toBe('o');
    expect(serviceTwo.firstLetter).toHaveBeenCalled();
    expect(serviceTwo.firstLetter).toHaveBeenCalledWith('camelo');
    expect(serviceTwo.firstLetter).toHaveBeenCalledTimes(1);
  })
})
