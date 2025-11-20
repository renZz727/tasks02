const display = document.getElementById("display");
const table = document.getElementById("table");
const progressBar = document.querySelector(".progressBar");
const progress = document.querySelector(".progress");

let page = 1;
let count = 10;
async function dataFecthing(page = 1, count = 10) {
  const url = `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${count}`;
  try {
    const response = await fetch(url);
    const userPosts = await response.json();
    for (let post of userPosts) {
      table.insertAdjacentHTML(
        "beforeend",
        `<tr><td>${post.userId}</td><td>${post.id}</td><td>${post.title}</td><td>${post.body}</td></tr>`
      );
    }
  } catch (error) {
    console.log(error);
  }
}

display.addEventListener("scroll", () => {
  if (page * 10 <= 100) {
    const percent = ((page * 10) / 102) * 100;
    progress.style.width = `${percent}%`;
  }
  if (display.scrollTop === display.scrollHeight - display.clientHeight) {
    setTimeout(() => {
      progressBar.style.display = "none";
    }, 500);
    progressBar.style.display = "block";
    page++;
    dataFecthing(page, count);
  }
});
dataFecthing();
