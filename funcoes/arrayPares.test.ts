import arrayPares from './arrayPares';

test('Teste arrayPares com [8, 3, 9, 5, 6, 12]', () => {
    expect(arrayPares([8, 3, 9, 5, 6, 12])).toEqual([8, 6, 12]);
});

test('Teste arrayPares com array vazio', () => {
    expect(arrayPares([])).toEqual([]);
});

test('Teste arrayPares com [1, 2, 3, 4, 5]', () => {
    expect(arrayPares([1, 2, 3, 4, 5])).toEqual([2, 4]);
});

test('Teste arrayPares com [7, 11, 13, 17]', () => {
    expect(arrayPares([7, 11, 13, 17])).toEqual([]);
});
