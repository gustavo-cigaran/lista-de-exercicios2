// 3. Filtrando Propriedades de Objetos
// ○ Objetivo: Dado um objeto produto com várias propriedades, crie uma
// função que retorna um novo objeto contendo apenas as propriedades cujo
// valor seja maior que um valor específico. Use for in para filtrar as
// propriedades.

const produto = {
    nome: "PS4",
    preco: 1200,
    quantidadeEstoque: 10
};

function filtraObjeto(objeto) {
    let novoObjeto = new Object();

    for(let propriedade in objeto) {
        if (objeto[propriedade] > 1000) {
            novoObjeto[propriedade] = objeto[propriedade];
        }
    }
    return novoObjeto;
}

console.log(filtraObjeto(produto));