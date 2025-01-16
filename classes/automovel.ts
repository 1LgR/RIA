export interface Automovel {
    modelo: string;
    ano: number;
    descricao(): string;
}

export class Carro implements Automovel {
    constructor(public modelo: string, public ano: number, public tipoCombustivel: string) {}

    descricao(): string {
        return `Carro: ${this.modelo}, Ano: ${this.ano}, Combustível: ${this.tipoCombustivel}`;
    }
}

export class Moto implements Automovel {
    constructor(public modelo: string, public ano: number, public cilindradas: number) {}

    descricao(): string {
        return `Moto: ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}cc`;
    }
}