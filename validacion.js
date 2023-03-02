
    //asignación de variables
    const form  = document.getElementsByTagName("form")[0];
    const nombre = document.getElementById("nom");
    const nombreError = document.querySelector("#nom + span.error");
  
    const email = document.getElementById("mail");
    const emailError = document.querySelector("#mail + span.error");
   
    const asunto = document.getElementById("asunto");
    const asuntoError = document.querySelector("#asunto + span.error");
    
    const mensaje = document.getElementById("mensaje");
    const mensajeError = document.querySelector("#mensaje + span.error");
    
    //nombre
     nombre.addEventListener("input", function (event) {
      if (nombre.validity.valid) {
        nombreError.innerHTML = "";
        nombreError.className = "error";
      } else {
        mensajeErrorNombre();
      }
    });
    
    function mensajeErrorNombre() {
      if(nombre.validity.valueMissing) {
        nombreError.textContent = "Este campo no puede estar vacío.";
      } else if(nombre.validity.tooShort) {
        nombreError.textContent = `El nombre debe tener una longitud de ${ nombre.minLength } caracteres; y tiene ${ nombre.value.length }.`;
      }
      nombreError.className = "error active";
    }
   //correo
    email.addEventListener("input", function (event) {
      if (email.validity.valid) {
        emailError.innerHTML = "";
        emailError.className = "error";
      } else {
        mensajeErrorEmail();
      }
    });
    function mensajeErrorEmail() {
      if(email.validity.valueMissing) {
        emailError.textContent = "El campo no puede estar vacío.";
      }else if(email.validity.typeMismatch) {
        emailError.textContent = "El correo no es valido.";
      } else if(email.validity.tooShort) {
        emailError.textContent = `El correo debe tener una longitud de ${ email.minLength } caracteres y tiene ${ email.value.length }.`;
      }
      emailError.className = "error active";
    }
    
        //asunto
     asunto.addEventListener("input", function (event) {
      if (asunto.validity.valid) {
        asuntoError.innerHTML = "";
        asuntoError.className = "error";
      } else {
        mensajeErrorAsunto();
      }
    });
    
    function mensajeErrorAsunto() {
      if(asunto.validity.valueMissing) {
        asuntoError.textContent = "Este campo no puede estar vacío.";
      } else if (asunto.validity.tooShort) {
        asuntoError.textContent = `El asunto debe tener una longitud de ${ asunto.minLength } caracteres; y tiene ${ asunto.value.length }.`;
      }
      asuntoError.className = "error active";
    }
        //mensaje
     mensaje.addEventListener("input", function (event) {
      if (mensaje.validity.valid) {
        mensajeError.innerHTML = "";
        mensajeError.className = "error";
      } else {
        mensajeErrorMensaje();
      }
    });
    
    function mensajeErrorMensaje() {
      if(mensaje.validity.valueMissing) {
        mensajeError.textContent = "Este campo no puede estar vacío.";
      } else if(mensaje.validity.tooShort) {
        mensajeError.textContent = `El mensaje debe tener una longitud de ${ mensaje.minLength } caracteres; y tiene ${ mensaje.value.length }.`;
      }
      mensajeErrorMensaje.className = "error active";
    }
    
    form.addEventListener("submit", function (event) {
      if(!email.validity.valid) {
        mensajeErrorEmail();
        event.preventDefault();
      }
      if(!nombre.validity.valid) {
        mensajeErrorNombre();
        event.preventDefault();
      }
      if(!asunto.validity.valid) {
        mensajeErrorAsunto();
        event.preventDefault();
      }
      if(!mensaje.validity.valid) {
        mensajeErrorMensaje();
        event.preventDefault();
      }
    });
