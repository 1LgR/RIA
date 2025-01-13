import printOrdenado from './printOrdenado';

test('Teste printOrdenado com [\'carro\', \'boneco\', \'ave\', \'lapís\']', () => {
    expect(printOrdenado(['carro', 'boneco', 'ave', 'lapís'])).toEqual(['ave', 'boneco', 'carro', 'lapís']);
});

test('Teste printOrdenado com array vazio', () => {
    expect(printOrdenado([])).toEqual([]);
});

test('Teste printOrdenado com [\'banana\', \'apple\', \'cherry\']', () => {
    expect(printOrdenado(['banana', 'apple', 'cherry'])).toEqual(['apple', 'banana', 'cherry']);
});

test('Teste printOrdenado com [\'zebra\', \'abacaxi\', \'leão\']', () => {
    expect(printOrdenado(['zebra', 'abacaxi', 'leão'])).toEqual(['abacaxi', 'leão', 'zebra']);
});
