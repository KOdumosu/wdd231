const yearSpan = document.querySelector("#year");
const lastModifiedSpan = document.querySelector("#lastModified");

yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;