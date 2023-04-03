// 6 - Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela pode fazer.

//  Utilizando a função 'toLowerCase' para aceitar converter o valor da variável 'peça' para letras minúsculas antes de veriricar o valor dentro da estrutura switch/case. Com isso, o codigo aceitará nomes de peças em qulquer combinação de letras maiúsculas e minusculas. Obs.: Lembre-se de que a função 'toLowerCase()' não modifica o valor original da variável, mas retorna uma nova string com todas as letras em minúsculo.

let peca = "cavalo";

switch (peca.toLowerCase()) {
  case "peão":
    console.log(
      "Um paço para frente ou dois passos para frente no primeiro movimento, captura na diagonal."
    );
    break;
  case "torre":
    console.log(
      "Movimenta-se quantos passos quiser, em linha reta horizontal ou vertical, para qualquer lado, sem pular outras peças."
    );
    break;
  case "cavalo":
    console.log(
      "Movimenta-se em L para qualquer lado do tabuleiro, pulando outras peças."
    );
    break;
  case "bispo":
    console.log(
      "Movimenta-se quantos passos quiser, para qualquer lado, em linha reta na diagonal, sem pular outras peças."
    );
    break;
  case "rainha":
    console.log(
      "Combina movimentos da torre e do bispo, em linha reta ou diagonal."
    );
    break;
  case "rei":
    console.log(
      "Movimenta-se em linha reta ou diagonal, para qualquer lado, um passo de cada vez"
    );
    break;

  default:
    console.log("Peça inválida.");
    break;
}
