import { quadradoComFor, quadradoComForEach } from './quadrado';

test('Teste quadradoComFor com [3, 5, 7, 3, 8, 9, 1]', () => {
    expect(quadradoComFor([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

test('Teste quadradoComForEach com [3, 5, 7, 3, 8, 9, 1]', () => {
    expect(quadradoComForEach([3, 5, 7, 3, 8, 9, 1])).toEqual([9, 25, 49, 9, 64, 81, 1]);
});

test('Teste quadradoComFor com array vazio', () => {
    expect(quadradoComFor([])).toEqual([]);
});

test('Teste quadradoComForEach com array vazio', () => {
    expect(quadradoComForEach([])).toEqual([]);
});

test('Teste quadradoComFor com [0, 2, -3]', () => {
    expect(quadradoComFor([0, 2, -3])).toEqual([0, 4, 9]);
});

test('Teste quadradoComForEach com [0, 2, -3]', () => {
    expect(quadradoComForEach([0, 2, -3])).toEqual([0, 4, 9]);
});
