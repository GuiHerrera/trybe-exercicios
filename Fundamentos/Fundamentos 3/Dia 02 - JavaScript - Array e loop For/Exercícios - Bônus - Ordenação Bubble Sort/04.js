// Agora, trabalhe com algumas formas geométricas! Utilize a estrutura de repetição for para escrever os códigos a seguir.

// Escreva um algoritmo que, dado um valor n positivo, ou seja, n > 1, imprima na tela um quadrado feito de asteriscos de tamanho n. Por exemplo:

let n = 5;
let symbol = "*";
let inputLine = "";

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  inputLine = inputLine + symbol;
}
for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  console.log(inputLine);
}
