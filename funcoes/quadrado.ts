function quadradoComFor(array: number[]): number[] {
    const result: number[] = [];
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] ** 2);
    }
    return result;
}

function quadradoComForEach(array: number[]): number[] {
    const result: number[] = [];
    array.forEach(num => {
        result.push(num ** 2);
    });
    return result;
}

export { quadradoComFor, quadradoComForEach };
