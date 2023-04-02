// 5 - 🚀 Utilize if/else para escrever um código que defina três variáveis com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

let anguloA = 90;
let anguloB = 30;
let anguloC = 90;

let somaAngulos = anguloA + anguloB + anguloC;

if (anguloA <= 0 || anguloB <= 0 || anguloC <= 0) {
  console.log("Erro: um ou mais angulos são inválicos.");
} else if (somaAngulos === 180) {
  console.log(true);
} else {
  console.log(false);
}
