// MATCHERS PARA NÚMEROS:
test('dois mais dois', () => {
  const value = 2 + 2;
  expect(value).toBeGreaterThan(3); // espera que 4 seja maior que 3 - OK
  expect(value).toBeGreaterThanOrEqual(3.5); // espera que 4 seja maior ou igual a 3 - OK
  expect(value).toBeLessThan(5); // espera que 4 seja menor que 5 - OK
  expect(value).toBeLessThanOrEqual(4.5); // espera que 4 seja menor ou igual a 4.5 - OK

  // toBe e toEqual são equivalentes para números
  expect(value).toBe(4); // espera que 4 seja 4 - ok
  expect(value).toEqual(4); // espera que 4 seja igual a 4 - ok
});

// MATCHERS PARA STRINGS:
test('não existe I em team', () => {
  expect('team').not.toMatch(/I/); // espera que a string team não tenha a string I - ok
});

test('mas existe "stop" em Christoph', () => {
  expect('Christoph').toMatch(/stop/); // espera que a string Christoph contenha a string stop - ok
});

// MATCHERS PARA ARRAYS:
const shoppingList = [
  'fraldas',
  'kleenex',
  'sacos de lixo',
  'papel toalha',
  'leite',
];

test('a lista de compras tem leite nela', () => {
  expect(shoppingList).toContain('leite'); // espera que o array shoppingList contenha a palavra leite - ok
  expect(new Set(shoppingList)).toContain('leite');
});

expect([1, 2, 3]).toHaveLength(3); // espera que o array passado tenha tamanho 3 - ok
expect('abc').toHaveLength(3); // espera que a string passada tenha tamanho 3 - ok
expect('').not.toHaveLength(5); // espera que a string vazia passada NÃO tenha tamanho 5 - ok


// MATCHERS PARA OBJETOS:
// Object containing house features to be tested
const houseForSale = {
  bath: true,
  bedrooms: 4,
  kitchen: {
    amenities: ['oven', 'stove', 'washer'],
    area: 20,
    wallColor: 'white',
    'nice.oven': true,
  },
};

test('this house has my desired features', () => {
  // Example Referencing
  expect(houseForSale).toHaveProperty('bath'); // espera que a constante houseForSale contenha a propriedade bath - ok
  expect(houseForSale).toHaveProperty('bedrooms', 4); // // espera que a constante houseForSale contenha a propriedade bedrooms, com valor 4 - ok

  expect(houseForSale).not.toHaveProperty('pool'); // espera que a constante houseForSale NÃO contenha a propriedade pool - ok

  // Deep referencing using dot notation
  expect(houseForSale).toHaveProperty('kitchen.area', 20);
  expect(houseForSale).toHaveProperty('kitchen.amenities', [
    'oven',
    'stove',
    'washer',
  ]);

  expect(houseForSale).not.toHaveProperty('kitchen.open');

  // Deep referencing using an array containing the keyPath
  expect(houseForSale).toHaveProperty(['kitchen', 'area'], 20);
  expect(houseForSale).toHaveProperty(
    ['kitchen', 'amenities'],
    ['oven', 'stove', 'washer'],
  );
  expect(houseForSale).toHaveProperty(['kitchen', 'amenities', 0], 'oven');
  expect(houseForSale).toHaveProperty(['kitchen', 'nice.oven']);
  expect(houseForSale).not.toHaveProperty(['kitchen', 'open']);
});