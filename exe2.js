// 2. Verificando Propriedades
// ○ Objetivo: Crie um objeto livro com propriedades titulo, autor,
// anoPublicacao e genero. Verifique se a propriedade editora existe no
// objeto usando for in. Se não existir, adicione essa propriedade ao objeto.

const livro = {
    titulo: "Arsène Lupin, o ladrão de casaca",
    autor: "Maurice Leblanc",
    anoPublicacao: 1907,
    genero: "Romance policial"
};

if (!livro.hasOwnProperty('editora')) {
    livro.editora = "Éditions Pierre Lafitte";
}

for (const propriedade in livro) {
    console.log(`${propriedade} = ${livro[propriedade]}`)
}