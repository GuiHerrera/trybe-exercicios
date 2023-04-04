// 3 - Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem {quantidade} livros favoritos”, em que “{quantidade}” corresponde à quantidade de livros favoritos e é um número gerado automaticamente por seu código.

let leitor = {
  nome: "Julia",
  sobrenome: "Pessoa",
  idade: 21,
  livrosFavoritos: [
    {
      titulo: "O Pior Dia de Todos",
      autor: "Daniela Kopsch",
      editora: "Tordesilhas",
    },
  ],
};
leitor.livrosFavoritos.push({
  titulo: "Harry Potter e o Prisioneiro de Azkaban",
  autor: "JK Rowling",
  editora: "Rocco",
});

// Há dois modos de acessar a chave "livrosFavoritos":

console.log(
  leitor.nome + " tem " + leitor.livrosFavoritos.length + " livros favoritos."
);

// ou

console.log(
  leitor["nome"] +
    " tem " +
    leitor["livrosFavoritos"].length +
    " livros favoritos."
);
