let index = 0;
const images = document.querySelectorAll("img");
const container = document.querySelector(".container");
const len = images.length - 1;
function loadImages(val = index) {
  if (index === len) {
    if (val === -1) index--;
    else index = 0;
  } else if (val === 1) index++;
  else if (val === -1) {
    if (index === 0) index = len;
    else index--;
  } else index--;

  const images = document.querySelectorAll("img");

  for (const image of images) {
    image.classList.remove("active");
  }
  images[index].classList.add("active");
}
let timer = setInterval(() => {
  loadImages(1);
}, 3000);

container.addEventListener("mouseover", () => {
  clearInterval(timer);
});

container.addEventListener("mouseout", () => {
  timer = setInterval(() => {
    loadImages(1);
  }, 3000);
});
