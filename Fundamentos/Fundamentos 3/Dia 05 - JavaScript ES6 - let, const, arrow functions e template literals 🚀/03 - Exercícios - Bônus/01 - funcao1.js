// Crie duas funções JavaScript com as seguintes especificações:

// Não se esqueça de usar template literals

// Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.

// O nome da função deverá ser substituaX.

// A função deverá receber um nome por parâmetro.

// Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!'.

// A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.

const substituaX = (nome) => {
  const frase = "Tryber x aqui!";
  const fraseArray = frase.split(" ");
  for (let index = 0; index < fraseArray.length; index += 1) {
    if (fraseArray[index] === "x") {
      fraseArray[index] = nome;
    }
  }
  return fraseArray.join(" ");
};

// console.log(substituaX("Bebeto"));

// Função 2: Escreva uma função que receberá o retorno da Função 1 por parâmetro e retornará uma nova string.

// O nome da função deverá ser minhasSkills.

// A função deverá receber o retorno da Função 1 - substituaX por parâmetro.

// Declare dentro da função uma variável com o nome skills e do tipo const.

// A variável skills deverá ser um array que contenha três strings com tecnologias que você já estudou.
// Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase 'Minhas três principais habilidades são:' e o valor da variável skills.

// Exemplo de retorno:

// Tryber Bebeto aqui!

// Minhas três principais habilidades são:

// JavaScript
// HTML
// CSS

const minhasSkills = (funcao1) => {
  const skills = ["JavaScript", "HTML", "CSS"];
  let frase = `${funcao1}
  Minhas três principais habilidades são:
  - ${skills[0]}
  - ${skills[1]}
  - ${skills[2]}`;

  return frase;
};

const funcao1 = substituaX("Guilherme");
console.log(minhasSkills(funcao1));
