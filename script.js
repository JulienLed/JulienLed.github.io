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
