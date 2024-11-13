const path = require('path');  // Importar el módulo path
const express = require('express');
const fs = require('fs');
const app = express();
const {existeTipoPrenda}= require('./Modelos/Prendas.js')

/* app.get() responde solo a solicitudes, 
 Esta funcion tiene 2 argumentos:
 - path: Especifica la URL o ruta a la que quieres responder.'/' representa la raíz del servidor.
 - callback: Es una función que se ejecutará cada vez que el servidor reciba una solicitud GET en la ruta especificada. Esta función toma dos parámetros:
	- request: Un objeto que contiene la información de la solicitud (como parámetros, cabeceras, etc.).
	- response: Un objeto que permite enviar una respuesta al cliente.
*/

app.use(express.static(path.join(__dirname, '../KingOfSouth')));

app.get('/', (request, response) => {
    //  Esto sirve para encontra una ruta relativa, es decir, arma la ruta clasi "/x/c/../index.html" apartir del directorio "KingOfSouth" hasta "index.html"
    const rutaDeArchivo = path.join(__dirname, '../KingOfSouth', 'index.html');
    
    // Utiliza una funcion de fs para poder leer un archivo del repo, si lo encuentra lo manda y si no lo encuentra manda error.
    fs.readFile(rutaDeArchivo, 'utf8', (err, html) => { if (err) {response.send('Paso algo malo XD'); } else { response.send(html); } });
});


// Iniciar el servidor, en el puerto 300 y genera la dir
app.listen(process.env.PORT || 3000, () => {
    console.log('App disponible en http://localhost:3000');
});

// Endpoint get
app.get('/api/idprenda', (req, res) => {
    //Obtengo el id y tipo de la prenda
    const {idPrenda, tipoPrenda} = req.query();

    if(!idPrenda){
        //Validacion de si nos paso un idprenda
        res.status(400).send({message : 'Es requerido un parámetro \'idPrenda\''});
    } else if (typeof idPrenda !== 'int' || idPrenda > 0){
        //Validacion de que el idPrenda sea entero y mayor a 0
        res.status(400).send({message : 'El parámetro \'idPrenda\' debe ser un entero mayor que 0'});
    } else if (!tipoPrenda){
        //Validacion de si nos paso un tipoPrenda
        res.status(400).send({message : 'Es requerido un parámetro \'tipoPrenda\''});
    } else if (typeof tipoPrenda !== 'string'){
        //Validacion de que el tipoPrenda sea un String
        res.status(400).send({message : 'El parámetro \'tipoPrenda\' debe ser un string'});
    } else {
        //Los datos enviados son correctos

        if (!existePrenda(tipoPrenda)){
            //Verificamos si el tipo de patron existe
            res.status(404).send('No existe el tipo de prenda');
        } else {
            //El tipo de prenda es valido

            if(!existePrendaEnTipo(idPrenda, tipoPrenda)){
                //Verificamos si ese id existe en ese tipo de prenda
                res.status(404).send('No existe el id en el tipo de prenda');
            } else {
                //Todo se cumple, enviamos la prenda
                const prenda = obtenerPrendaDeTipo(idPrenda, tipoPrenda);

                //Enviamos la respuesta
                res.send(prenda);
            }
        }
    }
})
