const container = document.querySelector(".container");
const form = document.querySelector("form");
const emailInput = document.querySelector("[data-email-input]");
const errorMessage = document.querySelector("[data-error]");
const successMessage = document.querySelector(".success-message");
const dismissButton = document.getElementById("dismiss-button");
const emailDisplay = document.querySelector(".success-message strong");

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
  return regex.test(email);
}

function showError() {
  emailInput.classList.add("error");
  errorMessage.classList.add("visible");
}

function hideError() {
  emailInput.classList.remove("error");
  errorMessage.classList.remove("visible");
}

emailInput.addEventListener("input", () => {
  hideError();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = emailInput.value;

  if (!validateEmail(email)) {
    showError();
    return;
  }

  emailDisplay.textContent = email;
  container.style.display = "none";
  successMessage.style.display = "flex";
});

dismissButton.addEventListener("click", () => {
  container.style.display = "block";
  successMessage.style.display = "none";
  form.reset();
});
