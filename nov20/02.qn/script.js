const images = document.querySelectorAll(".img");
const container = document.querySelector(".container");
let index = 0;
function loadImages(flow) {
  if (flow === -1) {
    if (index === 0) index = images.length - 1;
    index--;
  } else if (index === images.length - 1) index = 0;
  else index++;
  for (const image of images) {
    image.style.scrollSnapAlign = "none";
  }
  images[index].scrollIntoView({
    behavior: "smooth",
  });
  images[index].style.scrollSnapAlign = "center";
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
