// 10 - Utilize if/else para escrever um código que se inicie com dois valores em duas variáveis diferentes: o custo de um produto e seu valor de venda. A partir dos valores, o código deve calcular o lucro (ou seja, o valor de venda menos o custo do produto) da empresa ao vender mil produtos.

let macCusto = 4000;
let macVenda = 30000;

let lucro = (macVenda - macCusto) * 1000;

console.log(lucro);

//Enunciado mau feito... não precisaria aplicar if/esle... fiz da forma acima...mas o gabarido me dava outra forma

let costOfProduct = 1;
let saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  let totalCostOfProduct = costOfProduct * 1.2;
  let totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos!");
}
