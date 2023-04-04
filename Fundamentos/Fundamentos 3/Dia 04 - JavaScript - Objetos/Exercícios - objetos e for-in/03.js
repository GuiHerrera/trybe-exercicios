// 3 - Faça um for/in que mostre todas as chaves do objeto. O valor esperado no console é:

let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};

info.recorente = "Sim";

for (index in info) {
  console.log(index);
}
