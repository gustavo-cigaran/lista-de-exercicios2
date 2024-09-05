// 8. Criando Novos Arrays a Partir de Objetos
// ○ Objetivo: Crie um array de objetos filmes, onde cada filme tem titulo,
// diretor, e anoLancamento. Use forEach para criar um novo array
// contendo apenas os títulos dos filmes.

const filmes = [
    { titulo: "Inception", diretor: "Christopher Nolan", anoDeLancamento: 2010 }, 
    { titulo: "Parasite", diretor: "Bong Joon-ho", anoDeLancamento: 2019 },
    { titulo: "The Matrix", diretor: "Lana Wachowski e Lilly Wachowski", anoDeLancamento: 1999 }
];

let titulosFilme = [];

filmes.forEach((filme) => {
    titulosFilme.push(filme.titulo);
});

console.log(titulosFilme);