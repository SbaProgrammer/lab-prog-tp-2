//Productos a ofrecer

/*const productos1 = [
    { id: 1, nombre: 'Remera diseño de Messi', descripcion: 'Remera Manga Corta de Algodon', precio: 20, imagen: '../img/remera1.jpeg', tipo: 1},
    { id: 2, nombre: 'Remera diseño de Turing', descripcion: 'Remera Manga Corta de Algodon', precio: 80, imagen: '../img/remera2.jpeg', tipo: 1},
    { id: 3, nombre: 'Remera diseño de Boxeo', descripcion: 'Remera Manga Corta de Algodon', precio: 900, imagen: '../img/remera3.jpeg', tipo: 1 },
    { id: 4, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    //{ id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    //{ id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' },
    //{ id: 2, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' }
];*/



const remeras = [
    { id: 1, nombre: 'Remera diseño de Messi', descripcion: 'Remera Manga Corta de Algodon', precio: 20, imagen: '../img/remera1.jpeg'},
    { id: 2, nombre: 'Remera diseño de Turing', descripcion: 'Remera Manga Corta de Algodon', precio: 80, imagen: '../img/remera2.jpeg'},
    { id: 3, nombre: 'Remera diseño de Boxeo', descripcion: 'Remera Manga Corta de Algodon', precio: 900, imagen: '../img/remera3.jpeg'},
    { id: 3, nombre: 'Remera diseño de Boxeo', descripcion: 'Remera Manga Corta de Algodon', precio: 900, imagen: '../img/remera3.jpeg'}
];

const buzos = [
    { id: 4, nombre: 'Bermuda', descripcion: 'Bermuda de Jean', precio: 80, imagen: '../img/bermuda-de-jean.png' }
];

const catalogos = [
    { productos: remeras, tipo: 'Remeras'},
    { productos: buzos, tipo: 'Buzos'},
    //{ productos: [], tipo: 'Pantalones'}
];

//Genero el catalogo
function cargarCatalogo() {
    const catalogoInicial = document.getElementById('catalogoInicial');

    catalogos.forEach(catalogo => {
        const titulo = document.createElement('h2');
        titulo.textContent = catalogo.tipo;
        catalogoInicial.appendChild(titulo);

        const nuevoCatalogo = document.createElement('section');

        nuevoCatalogo.classList.add('catalogo-productos');

        const productos = catalogo.productos;

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
            nuevoCatalogo.appendChild(divProducto);
        })

        catalogoInicial.appendChild(nuevoCatalogo);
    })
}

window.onload = cargarCatalogo;