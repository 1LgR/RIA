import fatorial from './fatorial';

test('Teste o fatorial de 7', () => {
    expect(fatorial(7)).toBe(5040);
});

test('Teste o fatorial de 5', () => {
    expect(fatorial(5)).toBe(120);
});

test('Teste o fatorial de 15', () => {
    expect(fatorial(15)).toBe(1307674368000);
});
