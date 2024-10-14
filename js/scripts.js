//Productos a ofrecer

const productos = [
    { id: 1, nombre: 'Remera diseño de Messi', descripcion: 'Remera Manga Corta de Algodon', precio: 20, imagen: '../img/remera1.jpeg', tipo: 1},
    { id: 2, nombre: 'Remera diseño de Turing', descripcion: 'Remera Manga Corta de Algodon', precio: 80, imagen: '../img/remera2.jpeg', tipo: 1},
    { id: 3, nombre: 'Remera diseño de Boxeo', descripcion: 'Remera Manga Corta de Algodon', precio: 900, imagen: '../img/remera3.jpeg', tipo: 1 },
    //{ id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    //{ id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    //{ id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    //{ id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' }
];

//Genero el catalogo
function cargarCatalogo() {
    const catalogo = document.getElementById('catalogo_remeras');

    productos.forEach(producto => {
        //Creo la estructura
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        divProducto.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <div class="contenido">
            <h3>${producto.nombre}</h3>
            <div class="precio_boton">
                <button>Comprar</button>
                <p class="precio">$${producto.precio}</p>
            </div>
        </div>
        `
        catalogo.appendChild(divProducto);
    })
}

window.onload = cargarCatalogo;