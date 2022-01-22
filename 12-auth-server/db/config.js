const  mongoose = require('mongoose');


const dbConnection = async() =>{

    console.log('hola');
    try{
        await mongoose.connect(process.env.BD_CNN,{
            useNewUrlParser: true,
            useUnifiedTopology: true,
            //useCreateIndex:true provoca exception
        });
        console.log('DB Online');
            
    }catch(error){
        console.log(error);
        throw new Error('Error a la hora de inicializar la DB');
    }
}

module.exports={
    dbConnection
}