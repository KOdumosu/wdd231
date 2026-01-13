const menuButton = document.getElementById("menuBtn");
const navList = document.querySelector("#primaryNav ul");

menuButton.addEventListener("click", () => {
  navList.classList.toggle("open");

  // Accessibility: change aria-label
  const isOpen = navList.classList.contains("open");
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close Menu" : "Open Menu"
  );
});