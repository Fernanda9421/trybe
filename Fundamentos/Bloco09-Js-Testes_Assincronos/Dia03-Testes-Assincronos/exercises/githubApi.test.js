const { test, expect } = require('@jest/globals');
const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui
test('verifica se "sd-01-week4-5-project-todo-list" e "sd-01-week4-5-project-meme-generator" estão na lista', async () => {
  const listRepos = await getRepos('https://api.github.com/orgs/tryber/repos');
  expect.assertions(2);

  expect(listRepos).toContain('sd-01-week4-5-project-todo-list');
  expect(listRepos).toContain('sd-01-week4-5-project-meme-generator');
})