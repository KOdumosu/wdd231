const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("#primary-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");

    // Toggle aria-expanded
    const isOpen = nav.classList.contains("open");
    menuButton.setAttribute("aria-expanded", isOpen);

    // Change icon to X
    menuButton.textContent = isOpen ? "✕" : "☰";
  });
  menuButton.classList.toggle("active");
}
