const { response } = require('express');
const jwt = require('jsonwebtoken');

const validarJWT = (req, res = response, next)=>{
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            ok: false,
            msg: 'Error en el token'
        })
    }

    try{    
        const {id,name}= jwt.verify(token,process.env.secretKeyJWT);
        
        req.id=id;
        req.name=name;
    }catch(err){
        console.log('errr'+err);
       return res.json({
           ok:false,
           msg:'token expirado'
       })
    }
    
    //TODO OK
    next();
}

module.exports={
    validarJWT
}