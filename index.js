const express = require('express')
const app = express()

app.use(express.json());
var port = process.env.PORT || 8000;
//settings 
app.get('/', function(req, res) {
    const fn = (x, y, z) => x * y * z;
    const fnParams = [4, 5, 6];
    respuesta = {
        error: true,
        codigo: 200,
        mensaje: 'Punto de inicio'
    };
    res.send(respuesta);
});

app.listen(port);
console.log(port)