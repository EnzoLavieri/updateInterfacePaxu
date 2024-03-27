document.addEventListener("DOMContentLoaded", function () {
  var backgrounds = [
    "imgs/Fundo1.jpg",
    "imgs/Fundo2.jpg",
    "imgs/Fundo3.jpg",
  ];

  var previousBackground = localStorage.getItem("background");
  var randomIndex;

  do {
    randomIndex = Math.floor(Math.random() * backgrounds.length);
  } while (backgrounds[randomIndex] === previousBackground);

  var selectedBackground = backgrounds[randomIndex];
  localStorage.setItem("background", selectedBackground);

  document.querySelector(".imagem").style.backgroundImage =
    "url('" + selectedBackground + "')";
});
