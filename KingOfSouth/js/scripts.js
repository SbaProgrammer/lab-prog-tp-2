//Productos a ofrecer
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