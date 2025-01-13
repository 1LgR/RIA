import concatenaStrings from './concatenaString';

test('Teste concatenaStrings com [\'Arrays\', \'com\', \'TypeScript\']', () => {
    expect(concatenaStrings(['Arrays', 'com', 'TypeScript'])).toBe('Arrays com TypeScript');
});

test('Teste concatenaStrings com array vazio', () => {
    expect(concatenaStrings([])).toBe('');
});

test('Teste concatenaStrings com [\'Hello\', \'World\']', () => {
    expect(concatenaStrings(['Hello', 'World'])).toBe('Hello World');
});

test('Teste concatenaStrings com [\'a\', \'b\', \'c\', \'d\']', () => {
    expect(concatenaStrings(['a', 'b', 'c', 'd'])).toBe('a b c d');
});
