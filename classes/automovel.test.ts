import { Carro, Moto } from "./automovel";

describe("Testando a implementação de Automoveis", () => {
    test("Carro: descrição e alteração de atributos", () => {
        const carro = new Carro("Sedan", 2023, "Gasolina");

        expect(carro.descricao()).toBe("Carro: Sedan, Ano: 2023, Combustível: Gasolina");

        carro.modelo = "Hatch";
        carro.ano = 2024;
        carro.tipoCombustivel = "Flex";

        expect(carro.descricao()).toBe("Carro: Hatch, Ano: 2024, Combustível: Flex");
    });

    test("Moto: descrição e alteração de atributos", () => {
        const moto = new Moto("Trail", 2022, 250);

        expect(moto.descricao()).toBe("Moto: Trail, Ano: 2022, Cilindradas: 250cc");

        moto.modelo = "Esportiva";
        moto.ano = 2023;
        moto.cilindradas = 600;

        expect(moto.descricao()).toBe("Moto: Esportiva, Ano: 2023, Cilindradas: 600cc");
    });
});
