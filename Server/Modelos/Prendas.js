const fs = require('fs');

const jsonPrendas = JSON.parse(fs.readFileSync('./KingOfSouth/catalogos.json', 'utf-8'));

const existeTipoPrenda = (prenda) => {
    //Coincidencia mayus y minus?
    return prenda in jsonPrendas;
}

module.exports = {existeTipoPrenda};