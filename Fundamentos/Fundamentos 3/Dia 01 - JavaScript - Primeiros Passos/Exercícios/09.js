// 9 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for ímpar. Caso contrário, o código deve retornar false.

let a = 5;
let b = 9;
let c = 1;

let impar = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
  impar = true;
}
console.log(impar);
