const path = require('path');  // Importar el módulo path
const express = require('express');
const fs = require('fs');
const app = express();


/* app.get() responde solo a solicitudes, 
 Esta funcion tiene 2 argumentos:
 - path: Especifica la URL o ruta a la que quieres responder.'/' representa la raíz del servidor.
 - callback: Es una función que se ejecutará cada vez que el servidor reciba una solicitud GET en la ruta especificada. Esta función toma dos parámetros:
	- request: Un objeto que contiene la información de la solicitud (como parámetros, cabeceras, etc.).
	- response: Un objeto que permite enviar una respuesta al cliente.

*/

app.get('/', (request, response) => {
    //  Esto serve para entecontra una ruta relativa, es decir, arma la ruta clasi "/x/c/../index.html"
    const filePath = path.join(__dirname, 'KingOfSouth', 'index.html');
    
    // Lee el archivos html y si no lo lee le daria erros 
    fs.readFile(filePath, 'utf8', (err, html) => {
        if (err) {
            console.error('Error al leer el archivo:', err);  // Log para depurar
            response.status(500).send('Paso algo malo XD');
        } else {
            response.send(html);  // Enviar el contenido del archivo HTML
        }
    });
});


// Iniciar el servidor, en el puerto 300 y genera la dir
app.listen(process.env.PORT || 3000, () => {
    console.log('App disponible en http://localhost:3000');
});
