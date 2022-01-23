const jwt = require('jsonwebtoken');
let ms = require('ms');
const generarJWT = (id, name)=>{
    const payload = {id, name};
    console.log(id,name+"555");
    return new Promise((resolve, reject)=>{
        jwt.sign(payload,process.env.secretKeyJWT,{
            expiresIn: ms(100000)
        }, (err, token)=>{
            if(err){
                console.log(err);
                reject(err);
            }else{
                //TODO BIEN
                resolve(token);
                console.log(token);
                return token;
            }
        });
    });
    
}

module.exports={
    generarJWT
}