import { Carro, Moto, Veiculo } from "./veiculo";

descreva("Testando Veiculos e método estático", () => {
    test("Criação e descrição de Carro e Moto", () => {
        const carro = new Carro("SUV", 2023, "Gasolina");
        const moto = new Moto("Esportiva", 2022, 600);

        expect(carro.descricao()).toBe("Carro: SUV, Ano: 2023, Combustível: Gasolina");
        expect(moto.descricao()).toBe("Moto: Esportiva, Ano: 2022, Cilindradas: 600cc");
    });

    test("Alteração de atributos e comparação de ano", () => {
        const carro = new Carro("Sedan", 2020, "Flex");
        const moto = new Moto("Trail", 2020, 250);

        carro.modelo = "Hatch";
        carro.ano = 2021;

        moto.modelo = "Off-road";
        moto.ano = 2019;

        const comparacao = Veiculo.compararAno(carro, moto);

        expect(comparacao).toBe("Carro: Hatch, Ano: 2021, Combustível: Flex é mais novo que Moto: Off-road, Ano: 2019, Cilindradas: 250cc");
    });
});
