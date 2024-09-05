// 7. Modificando Objetos em um Array
// ○ Objetivo: Crie um array de objetos produtos, onde cada objeto tem nome,
// preco, e desconto. Use forEach para aplicar um desconto de 10% em todos
// os produtos e exibir o novo preço.

const produtos = [
    { nome: "Notebook", preco: 4500, desconto: 10 },
    { nome: "Smartphone", preco: 3000, desconto: 5 },
    { nome: "Monitor", preco: 1200, desconto: 15 }
];

produtos.forEach((produto) => {
    produto.preco = produto.preco * 0.90;
    console.log(produto);
})
