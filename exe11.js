// 11. Agrupando Elementos com forEach
// ○ Objetivo: Crie um array de objetos pedidos, onde cada pedido tem
// cliente, produto, e quantidade. Use forEach para criar um objeto que
// agrupa a quantidade total de produtos por cliente.

const pedidos = [
    { cliente: "Ana Pereira", produto: "Cafeteira", quantidade: 1 },
    { cliente: "Carlos Silva", produto: "Livro - JavaScript Avançado", quantidade: 2 },
    { cliente: "Maria Oliveira", produto: "Smart TV", quantidade: 5 },
    { cliente: "Ana Pereira", produto: "Teclado Mecânico", quantidade: 2 },
    { cliente: "Fernanda Costa", produto: "Mouse Sem Fio", quantidade: 3 },
    { cliente: "Fernanda Costa", produto: "Notebook", quantidade: 1 },
    { cliente: "Marcos Silva", produto: "Impressora", quantidade: 2 },
    { cliente: "Fernanda Costa", produto: "Mesa de Escritório", quantidade: 1 },
    { cliente: "Ricardo Souza", produto: "Cadeira Gamer", quantidade: 1 },
    { cliente: "Beatriz Santos", produto: "Fone de Ouvido", quantidade: 3 }
];

let cliente = new Object();

let nomeCliente = "Fernanda Costa";
let quantidadeTotal = 0;

pedidos.forEach((pedido) => {
    if (pedido.cliente == nomeCliente) {
        quantidadeTotal += pedido.quantidade;
    }
});

console.log(`Cliente: ${nomeCliente} \nTotal de produtos: ${quantidadeTotal}`);