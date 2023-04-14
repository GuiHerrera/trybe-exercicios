const header = document.getElementById("header-container");
header.style.backgroundColor = "rgb(0, 176, 104)";

const colun1 = document.querySelector(".emergency-tasks");
colun1.style.backgroundColor = "rgb(255, 160, 132)";

const colun2 = document.querySelector(".no-emergency-tasks");
colun2.style.backgroundColor = "rgb(249, 220, 93)";

const footer = document.getElementById("footer-container");
footer.style.backgroundColor = "rgb(0, 53, 51)";

const titleColun1 = document.querySelectorAll(".emergency-tasks h3");
for (let index = 0; index < titleColun1.length; index += 1) {
  titleColun1[index].style.backgroundColor = "rgb(165, 0, 244)";
}

const titleColun2 = document.querySelectorAll(".no-emergency-tasks h3");
for (let index = 0; index < titleColun2.length; index += 1) {
  titleColun2[index].style.backgroundColor = "rgb(35, 37, 36)";
}
