const {response, request} = require('express');
const { validationResult } = require('express-validator');


const crearUsuario =(req = request, res = response)=>{
    const{ name, email,password} = req.body;
    console.log(name,email,password);
    //se puede añadir return del tipo return res.json({ok: true,msg: 'Crear usuario /new'})
    res.json({
        ok: true,
        msg: 'Crear usuario /new'
    })
};

const loginUsuario = (req, res)=>{
    const {email,password} = req.body;
    console.log(email,password);
    return res.json({
        ok: true,
        msg: 'Login usuario /'
    })
};

//validar y renovar token
const revalidarToken = (req, res)=>{
    res.json({
        ok: true,
        msg: '/renew'
    })
};

module.exports={
    crearUsuario,
    loginUsuario,
    revalidarToken
}