//Productos a ofrecer

/*
const remeras = [
    { id: 1, nombre: 'Remera diseño de Messi', descripcion: 'Remera Manga Corta de Algodon', precio: 20, imagen: '../img/remera1.jpeg'},
    { id: 2, nombre: 'Remera diseño de Turing', descripcion: 'Remera Manga Corta de Algodon', precio: 80, imagen: '../img/remera2.jpeg'},
    { id: 3, nombre: 'Remera diseño de Boxeo', descripcion: 'Remera Manga Corta de Algodon', precio: 900, imagen: '../img/remera3.jpeg'},
];

const buzos = [
    { id: 4, nombre: 'Buzo Logo de Linux', descripcion: 'Buzo de algodón con el logo de Linux', precio: 600, imagen: '../img/buzo1.jpeg' },
    { id: 5, nombre: 'Buzo Logo de Windows', descripcion: 'Buzo de algodón con el logo de Windows', precio: 600, imagen: '../img/buzo2.jpeg' },
];

const zapatillas = [
    { id: 6, nombre: 'Zapatillas Operaciones Matemáticas', descripcion: 'Zapatillas Negras con dibujos matemáticos', precio: 2000, imagen: '../img/zapatillas1.jpeg' },
    { id: 7, nombre: 'Zapatillas Codigos', descripcion: 'Zapatillas blancas con lineas de codigo', precio: 2000, imagen: '../img/zapatillas2.jpeg' },
];

const catalogos = [
    { productos: remeras, tipo: 'Remeras'},
    { productos: buzos, tipo: 'Buzos'},
    { productos: zapatillas, tipo: 'Zapatillas'}
];
*/

fetch('../catalogos.json')
    .then(response => response.json())
    .then(data => cargarCatalogo(data))
    .catch(error => console.error("Salió todo mal man"))
 
//Genero el catalogo
function cargarCatalogo(jsonCatalogos) {
    //Traigo el catalogo inicial para agregar los subcatalogos
    const catalogoInicial = document.getElementById('catalogoInicial');

    //Realizo una iteración por cada elemento del json
    for (const tipoPrenda in jsonCatalogos) {
        
        //Creamos el titulo del catálogo
        const titulo = document.createElement('h2');
        titulo.textContent = tipoPrenda;
        catalogoInicial.appendChild(titulo);

        //Creamos una seccion para el subcatalogo
        const nuevoCatalogo = document.createElement('section');
        nuevoCatalogo.classList.add('catalogo-productos');

        //Para cada producto dentro del arreglo correspondiente a la prenda
        jsonCatalogos[tipoPrenda].forEach(producto => {
            //Creo la estructura
            const divProducto = document.createElement('div');
            divProducto.classList.add('producto');

            //Creo el HTML interno
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
            //Agrego el producto al subcatálogo
            nuevoCatalogo.appendChild(divProducto);
        })

        //Agrego el subcatálogo al Catálogo general
        catalogoInicial.appendChild(nuevoCatalogo);
    }
}