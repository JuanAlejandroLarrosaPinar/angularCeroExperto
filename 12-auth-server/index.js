const express = require('express');
const cors = require('cors');


// crear el servidor /aplicacion de express
const app = express();


app.listen(4000, ()=>{
    console.log(`Servidor corriendo en puerto ${4000}`);
});

/*app.get('/',(req, res)=>{
    console.log('Petición en el /');
    res.status(200).json({
        ok: true,
        msg: 'Resultado correcto'
    });
})*/
//CORS
app.use(cors());
//Lectura y parseo del body
app.use(express.json());
app.use('/api/auth', require('./routes/auth'));




