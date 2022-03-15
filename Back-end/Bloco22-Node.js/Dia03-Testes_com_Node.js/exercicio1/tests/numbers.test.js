const { expect } = require('chai');
const describeNumber = require('../services/describeNumber');

describe('describeNumber', () => {
  describe('Quando o número for maior que 0', () => {
    describe('A resposta', () => {
      it('é uma string', () => {
        const answer = describeNumber(10);
        expect(answer).to.be.a('string');
      });

      it('é igual à "positivo"', () => {
        const answer = describeNumber(10);
        expect(answer).to.be.equals('positivo');
      })
    });
  });

  describe('Quando o número for menor que 0', () => {
    describe('A resposta', () => {
      it('é uma string', () => {
        const answer = describeNumber(-10);
        expect(answer).to.be.a('string');
      });

      it('é igual à "negativo"', () => {
        const answer = describeNumber(-10);
        expect(answer).to.be.equals('negativo');
      });
    });
  });

  describe('Quando o número for igual a 0', () => {
    describe('A resposta', () => {
      it('é uma string', () => {
        const answer = describeNumber(0);
        expect(answer).to.be.a('string');
      });

      it('é igual à "nulo"', () => {
        const answer = describeNumber(0);
        expect(answer).to.be.equals('nulo');
      });
    });
  });
});
