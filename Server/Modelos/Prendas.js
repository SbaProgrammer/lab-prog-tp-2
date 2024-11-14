const fs = require('fs');

const jsonPrendas = JSON.parse(fs.readFileSync('../KingOfSouth/catalogos.json', 'utf-8'));

const existeTipoPrenda = (prenda) => {
    //Coincidencia mayus y minus?
    return prenda in jsonPrendas;
}

const existePrendaEnTipo = (idPrenda, tipoPrenda) => {
    //Verifico si el idPrenda existe en el tipo dado
    const arregloPrendas = jsonPrendas[tipoPrenda];
    let encontrado = false;

    arregloPrendas.forEach(prenda => {
        if(prenda.id === idPrenda){
            encontrado = true;
        }
    });

    return encontrado/*.some(item => item.id === idPrenda)*/;    
}

const obtenerPrendaDeTipo = (idPrenda, tipoPrenda) => {
    //Obtengo la prenda con el id
    return jsonPrendas[tipoPrenda].find(item => item.id === idPrenda);
}

module.exports = {existeTipoPrenda, existePrendaEnTipo, obtenerPrendaDeTipo};