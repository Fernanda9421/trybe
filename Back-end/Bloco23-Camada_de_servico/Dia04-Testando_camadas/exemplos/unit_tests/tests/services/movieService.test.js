const { expect } = require('chai');
const sinon = require('sinon');

const MoviesService = require('../../services/movieService');
const MoviesModel = require('../../models/movieModel');
const connection = require('../../models/connection');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });

  });

  describe('quando é inserido com sucesso', () => {
    const FAKE_ID = 1;

    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MoviesModel, 'create').resolves({ id: FAKE_ID });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
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
      const response = await MoviesService.getById();

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
      const response = await MoviesService.getById(1);

      expect(response).to.be.a('object');
    });

    it('o objeto possui as chaves "id", "title", "directedBy" e "releaseYear"', async () => {
      const response = await MoviesService.getById(1);

      expect(response).to.have.all.keys('id', 'title', 'directedBy', 'releaseYear');
    });

    it('a chave "title" seja uma string', async () => {
      const response = await MoviesService.getById(1);

      expect(response.title).to.be.a('string');
    });
  });
});
