// 9. Contabilizando Elementos com uma Condição
// ○ Objetivo: Crie um array de objetos clientes, cada um com propriedades
// nome, idade, e cidade. Use forEach para contar quantos clientes têm mais
// de 30 anos.

const clientes = [
    { nome: "Lucas Ferreira", idade: 28, cidade: "São Paulo" },
    { nome: "Mariana Costa", idade: 34, cidade: "Rio de Janeiro" },
    { nome: "Pedro Almeida", idade: 22, cidade: "Belo Horizonte" },
    { nome: "Ana Souza", idade: 30, cidade: "Porto Alegre" },
    { nome: "João Santos", idade: 40, cidade: "Curitiba" }
];

let contador = 0;

clientes.forEach((cliente) => {
    if(cliente.idade > 30) {
        contador++;
    }
})

console.log(`Há ${contador} clientes com mais de 30 anos.`);