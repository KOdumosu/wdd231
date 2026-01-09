const hamBtn = document.querySelector("#ham-btn");
const nav = document.querySelector("#nav-bar");

hamBtn.addEventListener("click", () => {
  hamBtn.classList.toggle("open");
  nav.classList.toggle("open");
});