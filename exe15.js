// 15. Filtrando e Somando Valores
// ○ Objetivo: Crie um array de objetos transacoes, onde cada transação tem
// tipo (entrada ou saída) e valor. Use forEach para calcular o saldo final,
// somando as entradas e subtraindo as saídas.

const transacoes = [
    { tipo: "entrada", valor: 1500 },
    { tipo: "saida", valor: 500 },
    { tipo: "entrada", valor: 2000 },
    { tipo: "saida", valor: 750 },
    { tipo: "entrada", valor: 1000 },
];

let saldoFinal = 0;

transacoes.forEach((transacao) => {
    transacao.tipo == "entrada" ? saldoFinal += transacao.valor : saldoFinal -= transacao.valor;
});

console.log(`Saldo Final: R$${saldoFinal}`);