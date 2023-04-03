// Desenvolva cada exercício a seguir com o uso de funções.

// Considere a variável saldo, que representa a quantia em conta de determinada(o) cliente do TrybeBank e escreva quatro programas que:

// Adicione um valor ao saldo.
// Subtraia um valor do saldo.
// Multiplique o valor do saldo por uma taxa.
// Divida o valor do saldo.
// Solução

// Primeiro passo: Defina as funções para cada operação, cada uma recebendo como parâmetro um valor.

let saldo = 100;

function somaSaldo(valor) {}

function subtraiSaldo(valor) {}

function multiplicaSaldo(valor) {}

function divideSaldo(valor) {}

// Segundo passo: Para cada função, atribua o retorno com a operação esperada e faça a chamada das funções, passando valores que serão recebidos em cada parâmetro das funções.

let saldo = 100;

function somaSaldo(valor) {
  return valor + saldo;
}

function subtraiSaldo(valor) {
  return saldo - valor;
}

function multiplicaSaldo(valor) {
  return valor * saldo;
}

function divideSaldo(valor) {
  return saldo / valor;
}

console.log(somaSaldo(300)); // 400
console.log(subtraiSaldo(50)); // 50
console.log(multiplicaSaldo(2)); // 200
console.log(divideSaldo(5)); // 20
