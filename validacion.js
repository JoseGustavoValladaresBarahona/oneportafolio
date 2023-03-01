
const form = document.querySelector("form");
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = ""; 
    emailError.className = "error"; 
  } else {
    mostrarError();
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    mostrarError();
    event.preventDefault();
  }
});

function mostrarError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "Este campo no puede estar vacío.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Debe ingresar un correo valido.";
  }

  emailError.className = "error active";
}
