const fs = require('fs');
const rutaJsonPrendas = './catalogos.json';
const jsonPrendas = JSON.parse(fs.readFileSync(rutaJsonPrendas, 'utf-8'));

const obtenerJSON = () => {
    //Devuelvo el json entero
    return jsonPrendas;
}

const obtenerPrendasDeTipo = (tipoPrenda) => {
    //Devuelvo las prendas de un tipo específico
    return jsonPrendas[tipoPrenda];
}

const existeTipoPrenda = (prenda) => {
    //Coincidencia mayus y minus?
    return prenda in jsonPrendas;
}

const existePrendaEnTipo = (idPrenda, tipoPrenda) => {
    //Convierto el tipoPrenda a minúscula para evitar diferencias
    //let tipoPrendaMinus = tipoPrenda.toLowerCase();

    //Verifico si el idPrenda existe en el tipo dado
    return jsonPrendas[tipoPrenda].some(item => item.id === idPrenda);    
}

const obtenerPrendaDeTipo = (idPrenda, tipoPrenda) => {
    //Convierto el tipoPrenda a minúscula para evitar diferencias
    //let tipoPrendaMinus = tipoPrenda.toLowerCase();

    //Obtengo la prenda con el id
    return jsonPrendas[tipoPrenda].find(item => item.id === idPrenda);
}

const agregarProducto = (producto, tipoPrenda) => {
    //Convierto el tipoPrenda a minúscula para evitar diferencias
    //let tipoPrendaMinus = tipoPrenda.toLowerCase();
    
    //Agrego el objeto recibido al arreglo del tipo correspondiente
    jsonPrendas[tipoPrenda].push(producto);

    //Lo convierto en String para que el parametro me lo permita
    let stringJSON = JSON.stringify(jsonPrendas);

    //Reescribo el archivo
    fs.writeFileSync(rutaJsonPrendas, stringJSON, 'utf8');
}

const eliminarProducto = (idPrenda, tipoPrenda) => {
    //Elimino el elemento del arreglo
    const nuevoArreglo = jsonPrendas[tipoPrenda].filter(producto => producto.id !== idPrenda);
    jsonPrendas[tipoPrenda] = nuevoArreglo;

    let stringJSON = JSON.stringify(jsonPrendas);

    //Reescribo el archivo
    fs.writeFileSync(rutaJsonPrendas, stringJSON, 'utf8');
}

const modificarNombre = (idPrenda, tipoPrenda, nombreNuevo) => {
    //Busco el item con id y modifico su nombre
    const producto = jsonPrendas[tipoPrenda].find(item => item.id === idPrenda);
    producto.nombre = nombreNuevo;

    const stringJSON = JSON.stringify(jsonPrendas);

    fs.writeFileSync(rutaJsonPrendas, stringJSON);
}

const modificarDescripcion = (idPrenda, tipoPrenda, descripcionNueva) => {
    //Busco el item con id y modifico su nombre
    const producto = jsonPrendas[tipoPrenda].find(item => item.id === idPrenda);
    producto.descripcion = descripcionNueva;

    const stringJSON = JSON.stringify(jsonPrendas);

    fs.writeFileSync(rutaJsonPrendas, stringJSON);
}

const modificarPrecio = (idPrenda, tipoPrenda, precioNuevo) => {
    //Busco el item con id y modifico su nombre
    const producto = jsonPrendas[tipoPrenda].find(item => item.id === idPrenda);
    producto.precio = precioNuevo;

    const stringJSON = JSON.stringify(jsonPrendas);

    fs.writeFileSync(rutaJsonPrendas, stringJSON);
}

const modificarImagen = (idPrenda, tipoPrenda, imagenNueva) => {
    //Busco el item con id y modifico su nombre
    const producto = jsonPrendas[tipoPrenda].find(item => item.id === idPrenda);
    producto.imagen = imagenNueva;

    const stringJSON = JSON.stringify(jsonPrendas);

    fs.writeFileSync(rutaJsonPrendas, stringJSON);
}

module.exports = {existeTipoPrenda, existePrendaEnTipo, obtenerPrendaDeTipo, agregarProducto, eliminarProducto, obtenerPrendasDeTipo, obtenerJSON, modificarDescripcion, modificarImagen, modificarNombre, modificarPrecio};