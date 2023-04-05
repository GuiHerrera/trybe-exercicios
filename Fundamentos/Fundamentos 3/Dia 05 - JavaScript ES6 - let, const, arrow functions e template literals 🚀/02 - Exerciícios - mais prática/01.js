// Exercícios – Mais prática
// Parte II – Desafio técnico
// Agora, você verá algumas especificações de algoritmos para desenvolver. É fundamental que você utilize o que estudou de let, const, arrow functions, template literals e ternary operator.

// 1 – Crie uma função que ligue e desligue o motor de um carro

const Carro = (ligado) => {
  const mensagem = ligado
    ? `O motor do carro está ligado!`
    : `O motor do carro esta desligado!`;
  console.log(mensagem);
  return mensagem;
};
