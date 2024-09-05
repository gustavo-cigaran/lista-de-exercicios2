// 6. Filtrando Arrays de Objetos
// ○ Objetivo: Crie um array de objetos funcionarios, onde cada objeto
// contém informações como nome, cargo, e salario. Use for of para filtrar
// e exibir apenas os funcionários cujo salário seja maior que um valor
// específico.

const funcionarios = [
    { nome: "Ana Silva", cargo: "Desenvolvedora Front-end", salario: 7000 },
    { nome: "Bruno Oliveira", cargo: "Gerente de Projetos", salario: 12000 },
    { nome: "Carla Mendes", cargo: "Analista de Dados", salario: 8500 }
];

console.log("\nFuncionários que ganham mais que R$8000:");
for (const funcionario of funcionarios) {
    if (funcionario.salario > 8000) {
        console.log(funcionario);
    }
}
