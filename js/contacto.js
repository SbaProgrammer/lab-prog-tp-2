document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
      alert("Por favor, complete todos los campos.");
      event.preventDefault();
  } else {
      alert("Formulario enviado con éxito");
  }
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); 
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
});


