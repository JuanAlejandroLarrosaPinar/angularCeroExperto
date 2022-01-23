const { Schema, model } = require("mongoose");

const UsuarioSchema = Schema({
    name:{
        
    },
    email:{
        
    },
    password:{
        
    }
});

module.exports= model('Usuario',UsuarioSchema);