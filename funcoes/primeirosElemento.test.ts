import pegarDoisPrimeirosElementos from './primeirosElementos';

test('Teste pegarDoisPrimeirosElementos com [2, 4, 6, 2, 8, 9, 5]', () => {
    expect(pegarDoisPrimeirosElementos([2, 4, 6, 2, 8, 9, 5])).toEqual([2, 4]);
});

test('Teste pegarDoisPrimeirosElementos com array vazio', () => {
    expect(pegarDoisPrimeirosElementos([])).toEqual([]);
});

test('Teste pegarDoisPrimeirosElementos com [1, 2]', () => {
    expect(pegarDoisPrimeirosElementos([1, 2])).toEqual([1, 2]);
});

test('Teste pegarDoisPrimeirosElementos com [5, 10, 15, 20]', () => {
    expect(pegarDoisPrimeirosElementos([5, 10, 15, 20])).toEqual([5, 10]);
});
