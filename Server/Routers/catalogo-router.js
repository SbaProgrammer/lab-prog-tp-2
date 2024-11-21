const express = require('express')
const router = express.Router();

//Obtengo el catalogo
router.get('/', (req, res) => {
    const jsonRetorno = obtenerJSON();
    res.send(jsonRetorno);
});

const { existeTipoPrenda, existePrendaEnTipo, obtenerPrendaDeTipo, agregarProducto, eliminarProducto, obtenerJSON, obtenerPrendasDeTipo } = require('../Modelos/Prendas.js')
// Endpoint get
router.get('/:tipoPrenda/:idPrenda', (req, res) => {
    //Obtengo el id y tipo de la prenda
    let { idPrenda, tipoPrenda } = req.params;

    idPrenda = parseInt(idPrenda);

    if (!idPrenda) {
        //Validacion de si nos paso un idprenda
        res.status(400).send({ message: 'Es requerido un parámetro \'idPrenda\'' });
    } else if (idPrenda < 0) {
        //Validacion de que el idPrenda sea entero y mayor a 0
        res.status(400).send({ message: 'El parámetro \'idPrenda\' debe ser un entero mayor que 0' });
    } else if (!tipoPrenda) {
        //Validacion de si nos paso un tipoPrenda
        res.status(400).send({ message: 'Es requerido un parámetro \'tipoPrenda\'' });
    } else if (typeof tipoPrenda !== 'string') {
        //Validacion de que el tipoPrenda sea un String
        res.status(400).send({ message: 'El parámetro \'tipoPrenda\' debe ser un string' });
    } else {
        //Los datos enviados son correctos

        if (!existeTipoPrenda(tipoPrenda)) {
            //Verificamos si el tipo de patron existe
            res.status(404).send('No existe el tipo de prenda');
        } else {
            //El tipo de prenda es valido

            if (!existePrendaEnTipo(idPrenda, tipoPrenda)) {
                //Verificamos si ese id existe en ese tipo de prenda
                res.status(404).send('No existe la prenda en el tipo');
            } else {
                //Todo se cumple, enviamos la prenda
                const prenda = obtenerPrendaDeTipo(idPrenda, tipoPrenda);

                //Enviamos la respuesta
                res.send(prenda);
            }
        }
    }
})

//Endponint POST Verifico tipos de datos?
router.use(express.json());
router.post('/:tipoPrenda', (req, res) => {
    //Obtengo el id y tipo de la prenda
    let productoRecibido = req.body;
    let { tipoPrenda } = req.params;

    if (!tipoPrenda) {
        //Verifico que el parametro esté
        res.status(400).send({ message: 'Se requiere el parámetro tipoPrenda' });
    } else if (typeof tipoPrenda !== 'string') {
        //Verifico que el tipo de Prenda sea un String
        res.status(400).send({ message: 'El parámetro debe ser un String' });
    }

    productoRecibido.id = parseInt(productoRecibido.id);
    productoRecibido.precio = parseInt(productoRecibido.precio);

    //Verifico que contenga todo lo del body
    if (!productoRecibido.id) {
        res.status(404).send('No está el idPrenda en el body');
    } else if (!productoRecibido.nombre) {
        res.status(404).send('No está el nombre en el body');
    } else if (!productoRecibido.descripcion) {
        res.status(404).send('No está la descripcion en el body');
    } else if (!productoRecibido.precio) {
        res.status(404).send('No está el precio en el body');
    } else if (!productoRecibido.imagen) {
        res.status(404).send('No está la imagen en el body');
    } else if (typeof productoRecibido.nombre != 'string') {
        res.status(400).send('El nombre en el body no es texto')
    } else if (typeof productoRecibido.descripcion != 'string') {
        res.status(400).send('El nombre en el body no es texto')
    } else if (typeof productoRecibido.imagen != 'string') {
        res.status(400).send('El nombre en el body no es texto')
    }

    if (!existeTipoPrenda(tipoPrenda)) {
        //Verifico que el tipo de la prenda exista
        res.status(404).send('No existe el tipo de la prenda');
    } else if (existePrendaEnTipo(productoRecibido.id, tipoPrenda)) {
        //Verifico si existe una prenda de ese tipo con el mismo id
        res.status(404).send('Ya existe la prenda en el tipo');
    } else {
        //Se puede agregar el producto
        agregarProducto(productoRecibido, tipoPrenda);
        res.status(200).send('Se agrego con exito');
    }
})

router.delete('/:tipoPrenda/:idPrenda', (req, res) => {
    //Obtengo el id y tipo de la prenda
    let { idPrenda, tipoPrenda } = req.params;

    idPrenda = parseInt(idPrenda);

    if (!idPrenda) {
        //Validacion de si nos paso un idprenda
        res.status(400).send({ message: 'Es requerido un parámetro \'idPrenda\'' });
    } else if (idPrenda < 0) {
        //Validacion de que el idPrenda sea entero y mayor a 0
        res.status(400).send({ message: 'El parámetro \'idPrenda\' debe ser un entero mayor que 0' });
    } else if (!tipoPrenda) {
        //Validacion de si nos paso un tipoPrenda
        res.status(400).send({ message: 'Es requerido un parámetro \'tipoPrenda\'' });
    } else if (typeof tipoPrenda !== 'string') {
        //Validacion de que el tipoPrenda sea un String
        res.status(400).send({ message: 'El parámetro \'tipoPrenda\' debe ser un string' });
    } else {
        //Los datos enviados son correctos

        if (!existeTipoPrenda(tipoPrenda)) {
            //Verificamos si el tipo de patron existe
            res.status(404).send('No existe el tipo de prenda');
        } else {
            //El tipo de prenda es valido

            if (!existePrendaEnTipo(idPrenda, tipoPrenda)) {
                //Verificamos si ese id existe en ese tipo de prenda
                res.status(404).send('No existe la prenda en el tipo');
            } else {
                //Todo se cumple, eliminamos la prenda
                eliminarProducto(idPrenda, tipoPrenda);

                //Enviamos la respuesta
                res.status(200).send('La prenda fue eliminada con exito');
            }
        }
    }
})

module.exports = router