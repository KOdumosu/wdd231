const menuButton = document.querySelector("#menuBtn");
const navigation = document.querySelector("#primaryNav");

menuButton.addEventListener("click", () => {
  navigation.classList.toggle("open");
  menuButton.classList.toggle("open");
});