// 3 – Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase

// Exemplo:

// Copiar
//   longestWord('Antônio foi ao banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
// De olho na dica 👀: Nesse exercício, será necessário utilizar os conhecimentos sobre array, método split e loop for/of.

const maiorPalavra = (frase) => {
  const palavras = frase.split(" ");
  let maiorPalavra = "";
  for (let palavra of palavras) {
    palavra.length > maiorPalavra.length ? (maiorPalavra = palavra) : null;
  }
  return maiorPalavra;
};

console.log(
  maiorPalavra("Antonio foi ao banheiro e não sabemos o que aconteceu")
);
