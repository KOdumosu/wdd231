
  const form = document.querySelector('.order-form form');
  const formContainer = document.getElementById('formContainer');
  const successMessage = document.getElementById('successMessage');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop actual submission

    // Hide the form
    formContainer.style.display = "none";

    // Show success message
    successMessage.style.display = "block";
  });


