const {response, request} = require('express');
const Usuario = require('../models/Usuario');


const crearUsuario =async (req = request, res = response)=>{
    const{ name, email,password} = req.body;
    console.log(name,email,password);
    try{
    //Verificar email
        let usuario = await Usuario.findOne({
            email
        });

        if(usuario){
           return res.status(400).json({
               ok:false,
               msg:'El usuario ya existe con ese email'
           })
        }else{
            const dbUsuario = new Usuario(req.body);
            dbUsuario.save();
            return res.status(201).json({
                ok:true,
                uid:dbUsuario.id,
                name
            })
            
        }
    //encriptar pass

    //generar jwt

    //generar respuesta
   

    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }

    


    //se puede añadir return del tipo return res.json({ok: true,msg: 'Crear usuario /new'})
    /*res.json({
        ok: true,
        msg: 'Crear usuario /new'
    })*/
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