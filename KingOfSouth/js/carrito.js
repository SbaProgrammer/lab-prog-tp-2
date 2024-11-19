function cargarElCarrito() {
    //Cargo el carrito en la pagina de carrito
    const seccionCarrito = document.getElementById('productos-carrito')

    seccionCarrito.innerHTML = "";
    
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        seccionCarrito.innerHTML = `<p>Tu carrito está vacío</p>`;
    }

    carrito.forEach(producto => {
        const productoNuevo = document.createElement('div')
        productoNuevo.classList.add('contenedor-producto')

        productoNuevo.innerHTML = `
                <div class="producto-carrito-imagen"><img src=${producto.imagen} alt="Remeraaa"></div>
                <div class="producto-carrito-nombre">
                    <p>${producto.nombre}
                    <p>
                </div>
                <div class="producto-carrito-precio">
                    <p>${producto.precio}</p>
                </div>
                <div class="producto-carrito-cantidad">
                    <p>${producto.cantidad}</p>
                </div>
                <button onclick="eliminarProducto(${producto.id})">-</button>
            `
        seccionCarrito.appendChild(productoNuevo);
    })

    const precioTotal = carrito.reduce((suma, producto) => suma + producto.precio * producto.cantidad, 0);
    const precioAPagar = document.getElementById('precio-a-pagar');
    precioAPagar.innerText = `$${precioTotal}`
}

function vaciarCarrito() {
    localStorage.setItem('carrito', JSON.stringify([]));
    cargarElCarrito();
}

function eliminarProducto(idproducto) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    let producto = carrito.find(item => item.id === idproducto);

    if (producto.cantidad > 1) {
        producto.cantidad -= 1;
    } else {
        carrito = carrito.filter(item => item.id != idproducto);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));

    cargarElCarrito();
}
window.onload = cargarElCarrito;