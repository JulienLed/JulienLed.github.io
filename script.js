const toggleLightBtn = document.getElementById("light-dark-mode");
const body = document.querySelector("body");
const a = Array.from(document.getElementsByClassName("a-light"));
const p = Array.from(document.getElementsByClassName("p-light"));
const title = Array.from(document.getElementsByClassName("title-light"));
const navBar = document.getElementById("h1-nav-light");
const span = document.getElementById("guess-span");
const input = document.getElementById("guess-input");
const button = document.getElementById("guess-button");
const score = document.getElementById("guess-score");

//toggle button :
const darkLight = () => {
  a.forEach((el) => {
    el.className === "a-dark"
      ? (el.className = "a-light")
      : (el.className = "a-dark");
  });
  p.forEach((el) => {
    el.className === "p-dark"
      ? (el.className = "p-light")
      : (el.className = "p-dark");
  });
  title.forEach((el) => {
    el.className === "title-dark"
      ? (el.className = "title-light")
      : (el.className = "title-dark");
  });
  body.className === "light"
    ? (body.className = "dark")
    : (body.className = "light");
  navBar.id === "h1-nav-light"
    ? (navBar.id = "h1-nav-dark")
    : (navBar.id = "h1-nav-light");
};

toggleLightBtn.addEventListener("click", () => {
  darkLight();
});

//guess game :
let countUsr = 0;
let countComp = 0;

const guessGame = (usrNum) => {
  let result = "";
  const random = Math.floor(Math.random() * 10) + 1; // Nombre à deviner
  const compNum = Math.floor(Math.random() * 10) + 1; // Nombre du computer

  if (usrNum <= 0 || usrNum > 10 || !usrNum) {
    result = "Enter a number between 1 and 10";
  } else {
    result += `Computer : ${compNum} / User : ${usrNum} / The Number: ${random} `;

    if (usrNum === random && compNum === random) {
      result += "=> Both win!";
      countUsr++;
      countComp++;
    } else if (usrNum === random) {
      result += "=> User wins!";
      countUsr++;
    } else if (compNum === random) {
      result += "=> Computer wins!";
      countComp++;
    } else if (compNum === usrNum) {
      result += "=> Seems like you are an AI...";
    } else {
      result += "=> Nobody wins!";
    }
  }

  span.innerHTML = result;
  score.innerHTML = `Score: Computer: ${countComp} / User: ${countUsr}`;
};

button.addEventListener("click", () => {
  guessGame(parseInt(input.value, 10)); // Assurez-vous de convertir l'entrée en entier
});
