// 3 - Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três variáveis com os valores que serão comparados.

let num1 = 55;
let num2 = 13;
let num3 = 77;

if (num1 > num2 && num1 > num3) {
  console.log(num1 + " é maior que " + num2 + " e " + num3);
} else if (num2 > num1 && num2 > num3) {
  console.log(num2 + " é maior que " + num1 + " e " + num3);
} else {
  console.log(num3 + " é maior que " + num1 + " e " + num2);
}
