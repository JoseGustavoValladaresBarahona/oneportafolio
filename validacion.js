  //nombre
  const nombre = document.getElementById("nom");

  nombre.addEventListener("input", (event) => {
   //event.preventDefault();
  if (nombre.validity.valueMissing) {
    nombre.setCustomValidity("Este Campo no puede estar vacío");
  } else {
    nombre.setCustomValidity("");
  }
});

//email
const email = document.getElementById("mail");

  email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("Se espera una dirección de correo electrónico");
  } else {
    email.setCustomValidity("");
  }
});

//Asunto
const asunto = document.getElementById("asunto");

  asunto.addEventListener("input", (event) => {
   // event.preventDefault();
  if (asunto.validity.valueMissing) {
    asunto.setCustomValidity("Este Campo no puede estar vacío");
  } else {
    asunto.setCustomValidity("");
  }
});

//textarea
const mensaje = document.getElementById("area-de-texto");

  mensaje.addEventListener("input", (event) => {
   // event.preventDefault();
  if (mensaje.validity.valueMissing) {
    mensaje.setCustomValidity("Este Campo no puede estar vacío");
  } else {
    mensaje.setCustomValidity("");
  }
});


  