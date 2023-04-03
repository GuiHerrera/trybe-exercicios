// Crie uma variável player e atribua a ela um objeto que contenha as variáveis listadas na sequência.

let player = {
  name: "Marta",
  lastName: "Silva",
  age: 34,
  medals: {
    golden: 2,
    silver: 3,
  },
};

console.log(
  "A jogadora " + player.name + " tem " + player.age + " anos de idade"
);

// Adicione ao objeto a chave bestInTheWorld por meio da sintaxe meuObjeto.chave = valor e atribua a essa chave um array que contenha as datas em que a jogadora Marta foi considerada a melhor do mundo.
// Para criar a chave bestInTheWorld, utilize o modelo meuObjeto.chave = valor e, ao acessar seu valor no objeto player, atribua a ela o array proposto no enunciado.

(player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018]),
  // Acesse a chave bestInTheWorld por meio da sintaxe meuObjeto['chave'] e faça um console.log no seguinte formato: “A jogadora Marta Silva foi eleita a melhor do mundo por 6 vezes”.
  // Acesse o valor das chaves por meio do formato nome-objeto['nome-chave'] e concatene com um + todas as informações de acordo com o retorno esperado pelo enunciado, considerando espaços em branco. Como a chave bestInTheWorld armazena um array, é possível utilizar funções específicas de arrays, como length, para obter o tamanho do array.

  console.log(
    "A jogadora " +
      player.name +
      player.lastName +
      " foi eleita a melhor do mundo por " +
      player["bestInTheWorld"].length +
      " vezes."
  );

// Acesse a chave medals por meio da sintaxe meuObjeto.chave e faça um console.log no seguinte formato: “A jogadora possui 2 medalhas de ouro e 3 medalhas de prata”.
// Acesse o valor das chaves por meio do formato nome-objeto.nome-chave e concatene com um + todas as informações de acordo com o retorno esperado pelo enunciado, considerando espaços em branco. Como algumas chaves do objeto player armazenam outros objetos, pode-se acessar os objetos internos com o formato nome-objeto.nome-chave.nome-chave.

console.log(
  "A jogadora possui " +
    player.medals.golden +
    " medalhas de ouro e " +
    player.medals.silver +
    " medalhas de prata."
);
