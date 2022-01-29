const jwt = require('jsonwebtoken');
let ms = require('ms');
const generarJWT = (id, name)=>{
    const payload = {id, name};
    
    return new Promise((resolve, reject)=>{
        jwt.sign(payload,process.env.secretKeyJWT,{
            expiresIn: ms(10000)
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject(err);
            }else{
                //TODO BIEN
                resolve(token);
                return token;
            }
        });
    });
    
}

module.exports={
    generarJWT
}