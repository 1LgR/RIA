function fatorial(n: number): number {
    let resultado = n;

    if (n < 0) return 0;

    if (n === 0 || n === 1) return 1;

    while (n > 1) {
        n--;
        resultado *= n;
    }
    
    return resultado;
}

export default fatorial;
