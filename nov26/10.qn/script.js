const container = document.querySelector(".container");
const button = document.querySelector("button");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    button.classList.remove('hide');
  } else {
    button.classList.add('hide');
  }
});
button.addEventListener("click", () => {
  container.scrollIntoView();
});
