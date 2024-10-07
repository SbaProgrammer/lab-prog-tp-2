//Productos a ofrecer

const productos = [
    { id: 1, nombre: 'Remera Manga Corta', descripcion: 'Remera Manga Corta de Algodon', precio: 20, imagen: '../img/Remera-manga-corta.jpg' },
    { id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    { id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    { id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    { id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    { id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    { id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' }
];

//Genero el catalogo
function cargarCatalogo() {
    const catalogo = document.getElementById('catalogo');

    productos.forEach(producto => {
        //Creo la estructura
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto');

        divProducto.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <div class="contenido">
                <h3>${producto.nombre}</h3>
                <p>${producto.descripcion}</p>
                <p class="precio">$${producto.precio}</p>
                <button>Comprar</button>
            </div>
        `
        catalogo.appendChild(divProducto);
    })
}

window.onload = cargarCatalogo;

//Animacion?
window.addEventListener('scroll', function() {
    const objCatalogo = document.getElementByClass('producto');
    const scrollY = window.scrollY;
    objCatalogo.style.transform = `translateZ(${-scrollY}px)`;
})