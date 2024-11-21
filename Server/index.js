const path = require('path');  // Importar el módulo path
const express = require('express');
const fs = require('fs');
const app = express();
const routerCatalogo = require('./Routers/catalogo-router.js')

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

app.use('/api/catalogo', routerCatalogo);
