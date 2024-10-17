const entradas = document.querySelectorAll(".entrada");
/* 
Selecciona todos los elementos que tienen la clase entradaForm, que serian los subformularios 
*/

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

/* 
Esta funcion se ejecuta solo en los ejemplos donde el usuario hace foco, es decir
que se pare en el elemento o asi, si hacen foco le agrega la clase focus
a ese elemento.
*/

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

/* 
Esta funcion se ejecuta en cada nodo para ver si el valor de adentro suyo es vacio o no
si no es vacio entonces no hace nada y si es vacio entonces remueve la clase focus
*/

entradas.forEach((entrada) => {
    entrada.addEventListener("focus", focusFunc);
    entrada.addEventListener("blur", blurFunc);
});

/* 
A cada elemento se le añade un event listener que serian las funciones.
*/

document.getElementById("contactForm").addEventListener("submit", function(event) {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if (name === "" || email === "" || message === "") {
      alert("Por favor, complete todos los campos.");
      event.preventDefault();
  } else {
      alert("¡Formulario enviado con éxito!");
  }
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Evita que el formulario se envíe a una página de error
  alert("¡Gracias por contactarnos! Te responderemos pronto.");
});


