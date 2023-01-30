const express = require('express');

// Creamos el servidor
const app = express();

// configuramos unas rutas provicionales
app.get('/', (req, res) => {
    res.send('hola mundo');
})

app.listen(4000, () => {
    console.log('El servidor esta corriendo correctamente');
})