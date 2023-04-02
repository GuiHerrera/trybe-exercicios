// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “Nenhum valor ímpar encontrado”.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let qtdImpar = 0;

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 !== 0) {
    qtdImpar += 1;
  }
}

if (qtdImpar === 0) {
  console.log("nenhum valor ímpar encontrado");
} else {
  console.log(qtdImpar);
}
