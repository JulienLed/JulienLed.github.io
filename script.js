//toggle button :
const toggleLightBtn = document.getElementById("light-dark-mode");
const body = document.querySelector("body");
const a = Array.from(document.getElementsByClassName("a-light"));
const p = Array.from(document.getElementsByClassName("p-light"));
const title = Array.from(document.getElementsByClassName("title-light"));
const navBar = document.getElementById("h1-nav-light");

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
const spanGuess = document.getElementById("guess-span");
const inputGuess = document.getElementById("guess-input");
const buttonGuess = document.getElementById("guess-button");
const scoreGuess = document.getElementById("guess-score");

let countUsr = 0;
let countComp = 0;

const guessGame = (usrNum) => {
  let result = "";
  const random = Math.floor(Math.random() * 10) + 1;
  const compNum = Math.floor(Math.random() * 10) + 1;

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

  spanGuess.innerHTML = result;
  scoreGuess.innerHTML = `Score: Computer: ${countComp} / User: ${countUsr}`;
};

buttonGuess.addEventListener("click", () => {
  guessGame(parseInt(inputGuess.value, 10));
});

//pendu :
const spanPendu = document.getElementById("mot");
const inputPendu = document.getElementById("guess-input-pendu");
const buttonPendu = document.getElementById("guess-button-pendu");
const pUsedLetter = document.getElementById("used-letters");
const mat1 = document.getElementById("mat-1");
const mat2 = document.getElementById("mat-2");
const mat3 = document.getElementById("mat-3");
const mat4 = document.getElementById("mat-4");
const mat5 = document.getElementById("mat-5");
const corde = document.getElementById("corde");
const tete = document.getElementById("tete");
const corps = document.getElementById("corps");
const jambes = document.getElementById("jambes");

const wordsArr = [
  "absurd",
  "bateau",
  "chante",
  "danser",
  "fleurir",
  "glisser",
  "harmonie",
  "jardins",
  "lumiere",
  "moteur",
  "naturel",
  "ouvrier",
  "poisson",
  "quasars",
  "raison",
  "silence",
  "tracteur",
  "utopies",
  "voyage",
  "zenith",
];

let wordToGuess = wordsArr[Math.floor(Math.random() * 20)];
let wordToGuessSplit = wordToGuess.split("");
let inputPenduLetter;
let pendingWord = [];

for (let i = 0; i < wordToGuess.length; i++) {
  mot.innerHTML += " _ ";
  pendingWord.push(" _ ");
}

const pendu = () => {
  inputPenduLetter = inputPendu.value.toLowerCase();
  let indexLetter = [];
  if (!wordToGuess.includes(inputPenduLetter)) {
    pUsedLetter.innerHTML.includes(inputPenduLetter)
      ? (pUsedLetter.innerHTML += "")
      : (pUsedLetter.innerHTML += inputPenduLetter);
  }
  if (wordToGuessSplit.includes(inputPenduLetter)) {
    wordToGuessSplit.forEach((el, index) => {
      if (el === inputPenduLetter) {
        pendingWord[index] = inputPenduLetter;
        indexLetter.push(index);
      }
    });
    for (let i = 0; i < wordToGuessSplit.length; i++) {
      if (indexLetter.includes(i) && !pendingWord.includes(inputPenduLetter)) {
        pendingWord[i] = inputPenduLetter;
        indexLetter = [];
      }
    }
    mot.innerHTML = pendingWord.join(" ");
  } else if (!wordToGuessSplit.includes(inputPenduLetter)) {
    if (mat1.style.visibility === "hidden") {
      mat1.style.visibility = "visible";
    } else if (mat2.style.visibility === "hidden") {
      mat2.style.visibility = "visible";
    } else if (mat3.style.visibility === "hidden") {
      mat3.style.visibility = "visible";
    } else if (mat4.style.visibility === "hidden") {
      mat4.style.visibility = "visible";
    } else if (mat5.style.visibility === "hidden") {
      mat5.style.visibility = "visible";
    } else if (corde.style.visibility === "hidden") {
      corde.style.visibility = "visible";
    } else if (tete.style.visibility === "hidden") {
      tete.style.visibility = "visible";
    } else if (corps.style.visibility === "hidden") {
      corps.style.visibility = "visible";
    } else if (jambes.style.visibility === "hidden") {
      jambes.style.visibility = "visible";
      mot.innerHTML = "Loser !";
      setTimeout(() => (buttonPendu.innerHTML = "Retry ?"), 2000);
    }
  }
  inputPendu.value = "";
};

const resetPendu = () => {
  mat1.style.visibility = "hidden";
  mat2.style.visibility = "hidden";
  mat3.style.visibility = "hidden";
  mat4.style.visibility = "hidden";
  mat5.style.visibility = "hidden";
  corde.style.visibility = "hidden";
  tete.style.visibility = "hidden";
  corps.style.visibility = "hidden";
  jambes.style.visibility = "hidden";
  pendingWord = [];
  pUsedLetter.innerHTML = "";
  wordToGuess = wordsArr[Math.floor(Math.random() * 20)];
  wordToGuessSplit = wordToGuess.split("");
  buttonPendu.innerHTML = "Guess !";
  mot.innerHTML = "";
  for (let i = 0; i < wordToGuess.length; i++) {
    mot.innerHTML += " _ ";
    pendingWord.push(" _ ");
  }
};

buttonPendu.addEventListener("click", () => {
  pendu();
  if (pendingWord.join("") == wordToGuess) {
    mot.innerHTML = "You win !";
    setTimeout(() => (buttonPendu.innerHTML = "Retry ?"), 2000);
  }
  if (buttonPendu.innerHTML === "Retry ?") {
    resetPendu();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    pendu();
    if (pendingWord.join("") == wordToGuess) {
      mot.innerHTML = "You win !";
      setTimeout(() => (buttonPendu.innerHTML = "Retry ?"), 2000);
    }
    if (buttonPendu.innerHTML === "Retry ?") {
      resetPendu();
    }
  }
});
