// 12. Atualizando um Array de Objetos
// ○ Objetivo: Crie um array de objetos estoque, onde cada objeto tem
// produto, quantidade e minimo. Use forEach para atualizar a quantidade
// dos produtos que estão abaixo do mínimo, duplicando suas quantidades.

const estoque = [
    { produto: "Camiseta", quantidade: 8, minimo: 10 }, // Abaixo do mínimo
    { produto: "Calça Jeans", quantidade: 30, minimo: 5 },
    { produto: "Tênis", quantidade: 12, minimo: 8 },
    { produto: "Jaqueta", quantidade: 15, minimo: 4 },
    { produto: "Meias", quantidade: 18, minimo: 20 }, // Abaixo do mínimo
    { produto: "Boné", quantidade: 25, minimo: 7 },
    { produto: "Relógio", quantidade: 1, minimo: 2 }, // Abaixo do mínimo
    { produto: "Óculos de Sol", quantidade: 3, minimo: 3 },
    { produto: "Mochila", quantidade: 18, minimo: 5 },
    { produto: "Carteira", quantidade: 3, minimo: 6 } // Abaixo do mínimo
];


estoque.forEach((item) => {
    if (item.quantidade < item.minimo) {
        item.quantidade *= 2;
    }
});

console.log(estoque);