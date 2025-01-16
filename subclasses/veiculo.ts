export abstract class Veiculo {
    constructor(public modelo: string, public ano: number) {}

    abstract descricao(): string;

    static compararAno(veiculo1: Veiculo, veiculo2: Veiculo): string {
        if (veiculo1.ano > veiculo2.ano) {
            return `${veiculo1.descricao()} é mais novo que ${veiculo2.descricao()}`;
        } else if (veiculo1.ano < veiculo2.ano) {
            return `${veiculo1.descricao()} é mais antigo que ${veiculo2.descricao()}`;
        } else {
            return `${veiculo1.descricao()} e ${veiculo2.descricao()} têm o mesmo ano`;
        }
    }
}

export class Carro extends Veiculo {
    constructor(modelo: string, ano: number, public tipoCombustivel: string) {
        super(modelo, ano);
    }

    descricao(): string {
        return `Carro: ${this.modelo}, Ano: ${this.ano}, Combustível: ${this.tipoCombustivel}`;
    }
}

export class Moto extends Veiculo {
    constructor(modelo: string, ano: number, public cilindradas: number) {
        super(modelo, ano);
    }

    descricao(): string {
        return `Moto: ${this.modelo}, Ano: ${this.ano}, Cilindradas: ${this.cilindradas}cc`;
    }
}
