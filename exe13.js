// 13. Implementando um Carrinho de Compras
// ○ Objetivo: Crie um objeto carrinho com uma propriedade itens, que é um
// array de objetos. Cada objeto dentro de itens deve representar um
// produto no carrinho, com nome, quantidade, e precoUnitario. Use forEach
// para calcular o valor total do carrinho.

const carrinho = {
    itens: [
        { nome: "Notebook", quantidade: 1, precoUnitario: 4500 },
        { nome: "Mouse", quantidade: 2, precoUnitario: 150 },
        { nome: "Teclado Mecânico", quantidade: 1, precoUnitario: 350 },
        { nome: "Monitor", quantidade: 2, precoUnitario: 800 },
        { nome: "Cadeira Gamer", quantidade: 1, precoUnitario: 1200 }
    ]
};

let valorTotal = 0;

carrinho.itens.forEach((produto) => {
    valorTotal += (produto.precoUnitario * produto.quantidade);
});

console.log(`Valor Total: R$${valorTotal}`);