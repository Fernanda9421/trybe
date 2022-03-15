const fs = require('fs').promises;
const sinon = require('sinon');

const { expect } = require('chai');
const writeFile = require('../services/writeFile');
const RETURN_FUNCTION = 'ok';

describe('testa função writeFile', () => {
  before(() => {
    sinon.stub(fs, 'writeFile');
  });

  after(() => {
    fs.writeFile.restore();
  });
  
  describe('O retorno', () => {
    it('é uma string', () => {
      const answer = writeFile('arquivo.txt', 'texto para o teste 1');
      expect(answer).to.be.a('string');
    });

    it('é equivalente à "ok"', () => {
      const answer = writeFile('arquivo.txt', 'texto para o teste 1');
      expect(answer).to.be.equals(RETURN_FUNCTION);
    });
  });
});
