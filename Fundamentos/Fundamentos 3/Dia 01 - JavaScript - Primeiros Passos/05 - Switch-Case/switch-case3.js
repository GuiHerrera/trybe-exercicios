// Crie uma variável para armazenar o status da pessoa candidata em um processo seletivo. As possibilidades são: 'aprovada', 'lista' ou 'reprovada'.
// Crie uma estrutura condicional com o switch/case para imprimir as seguintes mensagens:
// Caso 'aprovada', imprima “Parabéns, você está no grupo de pessoas aprovadas!”.
// Caso 'lista', imprima “Você está na nossa lista de espera.”.
// Caso 'reprovada', imprima “Infelizmente, você reprovou.”.
// Caso default, imprima a mensagem “Informação incorreta.”.

let trafficLight = "vermelho";

switch (trafficLight) {
  case "vermelho":
    console.log("pare");
    break;

  case "amarelo":
    console.log("atenção");
    break;

  case "verde":
    console.log("siga");
    break;

  default:
    console.log("valor não identificado");
}
