// 8 - Utilize if/else para escrever um código que defina três números em variáveis e retorne true se pelo menos uma das três for par. Caso contrário, o código deve retornar false.

let a = 5;
let b = 9;
let c = 1;

let par = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
  par = true;
}
console.log(par);
