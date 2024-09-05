// 1. Acessando Propriedades de Objetos
// ○ Objetivo: Crie um objeto carro com propriedades como marca, modelo,
// ano, e cor. Use for in para iterar sobre as propriedades e exibir seus
// valores no console.

const carro = {
    marca: "Volkswagen",
    modelo: "Gol",
    ano: 2014,
    cor: "Vermelho"
};

for (const elemento in carro) {
    console.log(`${elemento} = ${carro[elemento]}`);
}