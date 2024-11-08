const fatorial = require('./fatorial');

test('Teste o fatorial de 4', () => {
    expect(fatorial(7)).toBe(5040);
});

test('Teste o fatorial de 3', () => {
    expect(fatorial(5)).toBe(120);
});

test('Teste o fatorial de 10', () => {
    expect(fatorial(15)).toBe(1307674368000);
});