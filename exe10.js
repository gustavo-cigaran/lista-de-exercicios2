// 10. Criando Relatórios com Objetos e Arrays
// ○ Objetivo: Crie um array de objetos vendas, onde cada objeto tem produto,
// quantidade e valor. Use forEach para calcular o valor total de vendas de
// todos os produtos.

const vendas = [
    { produto: "Camiseta", quantidade: 3, valor: 100 },
    { produto: "Tênis", quantidade: 2, valor: 250 },
    { produto: "Mochila", quantidade: 6, valor: 150 },
];

vendas.forEach((item) => {
    console.log(`Produto: ${item.produto} - Valor Total: R$${item.valor * item.quantidade}`);
});
