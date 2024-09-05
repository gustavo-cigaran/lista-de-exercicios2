// 4. Iterando Sobre Arrays de Objetos
// ○ Objetivo: Crie um array de objetos pessoas, onde cada objeto representa
// uma pessoa com nome, idade, e cidade. Use for of para exibir as
// informações de cada pessoa no console.

const pessoas = [
    { nome: "Gustavo", idade: 22, cidade: "Porto Alegre" },
    { nome: "João Lucas", idade: 23, cidade: "Cachoeirinha" },
    { nome: "Henrique", idade: 19, cidade: "Canoas" }
];

for (const pessoa of pessoas) {
    console.log(pessoa);
}