// Cache elements once 
const learnMoreButtons = document.querySelectorAll(".learn-more");
const cards = document.querySelectorAll(".card");
const modals = document.querySelectorAll(".membership-modal");

let lastTrigger = null;

learnMoreButtons.forEach(button => {
  button.addEventListener("click", () => {
    const modal = document.getElementById(button.dataset.modal);
    const card = button.closest(".card");

    // Store trigger for focus return
    lastTrigger = button;

    // Clear previous card highlights
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    // Open dialog (centered by default)
    modal.showModal();

    // Accessibility: move focus to dialog
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("role", "dialog");
    modal.focus();

    // Remove highlight when modal closes
    modal.addEventListener(
      "close",
      () => {
        card.classList.remove("active");

        // Restore focus to triggering element
        if (lastTrigger) lastTrigger.focus();
      },
      { once: true }
    );
  });
});

// Auto-close when clicking outside dialog content
modals.forEach(modal => {
  modal.addEventListener("click", e => {
    const rect = modal.getBoundingClientRect();

    const clickedOutside =
      e.clientX < rect.left ||
      e.clientX > rect.right ||
      e.clientY < rect.top ||
      e.clientY > rect.bottom;

    if (clickedOutside) {
      modal.close();
    }
  });
});

document.querySelectorAll(".apply-btn").forEach(button => {
  button.addEventListener("click", () => {
    const level = button.dataset.membership;
  

    // Select the radio button
    const radio = document.querySelector(
      `input[name="membership"][value="${level}"]`
    );
    if (radio) {
      radio.checked = true;
      radio.focus();
    }

    // Close the dialog
    const dialog = button.closest("dialog");
    dialog.close();
  });
});
document.querySelector("form").addEventListener("submit", () => {
  document.getElementById("timestamp").value =
    new Date().toLocaleString();
});