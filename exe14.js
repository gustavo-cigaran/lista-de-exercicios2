// 14. Manipulando Objetos Complexos
// ○ Objetivo: Crie um objeto empresa com uma propriedade departamentos,
// que é um array de objetos. Cada departamento tem um nome e uma lista
// de funcionarios. Use for in e for of para iterar sobre os departamentos
// e seus funcionários, exibindo o nome de cada funcionário junto com o
// departamento ao qual pertence.

const empresa = {
    departamentos: [
        {
            nome: "Tecnologia",
            funcionarios: [
                { nome: "Ana Pereira", cargo: "Desenvolvedora Front-end" },
                { nome: "Carlos Silva", cargo: "Analista de Sistemas" },
                { nome: "Fernanda Lima", cargo: "Engenheira de Software" },
            ],
        },
        {
            nome: "Recursos Humanos",
            funcionarios: [
                { nome: "Mariana Costa", cargo: "Gerente de RH" },
                { nome: "João Souza", cargo: "Analista de Recrutamento" },
            ],
        },
        {
            nome: "Financeiro",
            funcionarios: [
                { nome: "Ricardo Santos", cargo: "Diretor Financeiro" },
                { nome: "Beatriz Oliveira", cargo: "Analista Contábil" },
            ],
        },
    ],
};

for (const departamento of empresa.departamentos) {
    console.log(`Departamento: ${departamento.nome}`);
    for (const funcionario in departamento.funcionarios) {
        console.log(`- Funcionário: ${departamento.funcionarios[funcionario].nome}`);
    }
}