const menuBtn = document.getElementById("hamburger");
const cancel = document.getElementById("cancel");
const content = document.querySelector(".contents");
const subs = document.querySelectorAll(".sub");
const subItem = document.querySelectorAll(".sub-li");

let isDisplayed = true;
menuBtn.addEventListener("click", () => {
  menuBtn.style.display = "none";
  sideBar.style.display = "block";
});

cancel.addEventListener("click", () => {
  menuBtn.style.display = "block";
  sideBar.style.display = "none";
});
content.addEventListener("click", () => {
  menuBtn.style.display = "block";
  sideBar.style.display = "none";
});

for (let i = 0; i < subs.length; i++) {
  console.log(subs[i], " ", subItem[i]);
  subs[i].addEventListener("click", () => {
    if (!isDisplayed) subItem[i].style.display = "block";
    else subItem[i].style.display = "none";
    isDisplayed = !isDisplayed;
  });
}
