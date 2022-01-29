const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();
const path = require('path');

// crear el servidor /aplicacion de express
const app = express();

//Conexión a base de datos
dbConnection();


app.listen(process.env.PORT, ()=>{
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`);
});

/*app.get('/',(req, res)=>{
    console.log('Petición en el /');
    res.status(200).json({
        ok: true,
        msg: 'Resultado correcto'
    });
})*/

//Directorio publico
app.use(express.static('public'));
//CORS
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));
//esto permite que podamos desplegar app angular o cualquier otra en node js.
app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'public/index.html'));
})





