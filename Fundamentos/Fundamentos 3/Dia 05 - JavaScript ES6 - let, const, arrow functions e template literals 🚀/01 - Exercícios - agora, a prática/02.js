// 🚀 Altere o valor das propriedades do objeto para que respeite as características da variável do tipo const.
// Copie o código a seguir e rode-o para verificar sua saída.

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`

// Executando esse código, recebe-se um erro `TypeError: Assignment to constant variable.`

// const pessoa = {
//   nome: 'Henri',
//   idade: 20
// }
// pessoa = {
//   nome: 'Luna',
//   idade: 19
// } // Altere essa estrutura para corrigir o erro.
// console.log('Nome:', pessoa.nome);
// console.log('Idade:', pessoa.idade);

const pessoa = {
  nome: "Henri",
  idade: 20,
};

pessoa.nome = "Luana";
pessoa.idade = 19;

console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
