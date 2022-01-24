const bcrypt = require('bcryptjs/dist/bcrypt');
const {response, request} = require('express');
const { generarJWT } = require('../helpers/jwt');
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
            //encriptar pass
            const salt = bcrypt.genSaltSync();
            dbUsuario.password = bcrypt.hashSync(password, salt);
            
            await dbUsuario.save();
             //generar jwt
             const token = await generarJWT(dbUsuario._id,dbUsuario.name);
            return res.status(201).json({
                ok:true,
                uid:dbUsuario.id,
                name,
                token
            })
            
        }
  

   

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

const loginUsuario = async (req, res)=>{
    const {email,password} = req.body;

    try{
        let usuario = await Usuario.findOne({
            email
        });

        if(!usuario){
            return res.status(400).json({
                ok:false,
                msg:'El usuario o contraseña son incorrectos'
            })
        }else{
            const validPassword = bcrypt.compareSync(password, usuario.password);
            if(!validPassword){
                return res.status(400).json({
                    ok: false,
                    msg: 'El password no es válido'
                });
            }
            
            const token = await generarJWT(usuario._id,usuario.name);
            return res.status(200).json({
                ok: true,
                token
            })
        }
        
    }catch(err){
        console.log(err);
        return res.status(500).json({
            ok:false,
            msg:'Hable con el administrador'
        });
    }
};

//validar y renovar token
const revalidarToken = async (req, res)=>{
    const {id,name} = req;
    const token = await generarJWT(id,name);
    return res.json({
        ok: true,
        msg: 'Renew',
        id,
        name,
        token
    })
};

module.exports={
    crearUsuario,
    loginUsuario,
    revalidarToken
}