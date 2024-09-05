// 5. Calculando Valores em Arrays de Objetos
// ○ Objetivo: Crie um array de objetos alunos, cada um com propriedades
// nome, nota1, e nota2. Use for of para calcular a média das notas de cada
// aluno e exibir o nome do aluno junto com sua média.

const alunos = [
    { nome: "Lais", nota1: 7.5, nota2: 10 },
    { nome: "Pedro", nota1: 8, nota2: 6 },
    { nome: "Henrique", nota1: 4, nota2: 9 }
];

console.log("Média dos alunos:");
for (const aluno of alunos) {
    let media = (aluno.nota1 + aluno.nota2) / 2;
    console.log(`${aluno.nome} - ${media}`);
}
