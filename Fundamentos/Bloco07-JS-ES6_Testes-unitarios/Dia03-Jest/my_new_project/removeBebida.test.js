const removeBebida = require('./removeBebida');

describe('Remove bebidas', () => {
  it ('Remover água', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebida(bebidas, 'água')).toEqual(['coca-cola', 'sukita', 'garapa', 'suco de laranja', 'groselha'])
  });
  it ('Remover garapa', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebida(bebidas, 'garapa')).toEqual(['coca-cola', 'sukita', 'água', 'suco de laranja', 'groselha'])
  });
  it('Remover groselha caso exista', () => {
    const bebidas = ['coca-cola', 'sukita', 'água', 'garapa', 'suco de laranja', 'groselha'];
    expect(removeBebida(bebidas, 'groselha')).not.toContain('groselha');
  });
});