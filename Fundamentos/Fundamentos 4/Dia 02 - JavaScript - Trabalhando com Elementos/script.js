const whereaAreYou = document.getElementById("where-are-you");
const parent = whereaAreYou.parentElement;
parent.style.color = "red";

const firstChildOfChild = whereaAreYou.firstElementChild;
firstChildOfChild.innerText = "First Child Of Child";

const firstChild = parent.firstElementChild;

const primeiroFilho2 = 