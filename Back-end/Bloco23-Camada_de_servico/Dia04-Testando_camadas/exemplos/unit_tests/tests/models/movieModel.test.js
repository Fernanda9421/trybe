const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }

  before(() => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(() => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {
    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('o objeto possui o "id" do novo filme inserido, e que seu valor seja 1', async () => {
      const response = await MoviesModel.create(payloadMovie);
      
      expect(response).to.have.a.property('id');
      expect(response.id).to.be.equals(1);
    });
  });
});

describe('Busca um filme no BD', () => {
  before(() => {
    const execute = [[]];
    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(() => {
    connection.execute.restore();
  });

  describe('quando o "id" passado não existe no BD', () => {
    it('retorna null', async () => {
      const response = await MoviesModel.getById();

      expect(response).to.be.null;
    });
  });

  describe('quando o "id" passado existe no BD', () => {
    const payload = {
      id: 1,
      title: 'Exemplo de filme',
      directedBy: 'Exemplo de diretor',
      releaseYear: 2022,
    };

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(payload);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.be.a('object');
    });

    it('o objeto possui as chaves "id", "title", "directedBy" e "releaseYear"', async () => {
      const response = await MoviesModel.getById(1);

      expect(response).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });

    it('a chave "title" seja uma string', async () => {
      const response = await MoviesModel.getById(1);

      expect(response.title).to.be.a('string');
    });
  });
});
