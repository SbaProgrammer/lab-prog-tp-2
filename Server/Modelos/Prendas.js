const fs = require('fs');
const rutaJsonPrendas = '../KingOfSouth/catalogos.json';
const jsonPrendas = JSON.parse(fs.readFileSync(rutaJsonPrendas, 'utf-8'));

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

module.exports = {existeTipoPrenda, existePrendaEnTipo, obtenerPrendaDeTipo, agregarProducto};