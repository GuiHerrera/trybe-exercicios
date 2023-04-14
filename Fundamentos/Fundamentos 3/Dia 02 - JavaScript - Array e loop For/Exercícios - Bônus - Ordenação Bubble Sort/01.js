// Para realizar os próximos dois exercícios, leia este artigo e tente entender o que está acontecendo no código abaixo:

//devfuria.com.br/logica-de-programacao/introducao-ao-algoritmo-de-ordenacao-bubble-sort/

// Com base na leitura do artigo, faça os exercícios a seguir.

// Ordene o array numbers em ordem crescente e imprima seus valores.

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index = 1; index < numbers.length; index += 1) {
  for (let index2 = 0; index2 < index; index2 += 1) {
    if (numbers[index] < numbers[index2]) {
      let posicao = numbers[index];
      numbers[index] = numbers[index2];
      numbers[index2] = posicao;
    }
  }
}
console.log(numbers);
