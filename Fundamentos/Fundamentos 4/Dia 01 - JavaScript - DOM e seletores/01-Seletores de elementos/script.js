const paragraph = document.getElementById("paragraph");
paragraph.style.color = "red";

const titulo = document.getElementById("page-title");
titulo.innerText = "Meu titulo alterado";

const subTitulo = document.getElementById("subtitle");
subTitulo.innerText = "Segundo titulo alterado também";

const paragrafo = document.getElementsByClassName("paragrafos");

for (let index = 0; index < paragrafo.length; index += 1);
{
  paragrafo[0].style.color = "blue";
}

const tagSubTitulo = document.getElementsByTagName("h4");
for (let index = 0; index < tagSubTitulo.length; index += 1);
{
  tagSubTitulo[0].style.color = "red";
}

document.querySelectorAll(".paragrafos")[0].innerText = "mudando texto";
