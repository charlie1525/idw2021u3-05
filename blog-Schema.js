var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    title:{
        type: String,
        required: true
    }, // fin de la estrucutra del titulo
    
    author:{
        type:String,
        require: true
    }, // fin de la estructura del autor
    
    body:{
        type: String,
        require: true
    }, // fin de la estructura del cuerpo del blog

    comments: [{body: String, date:Date}], //fin de la estructura de los comentrarios
    date: {type: Date, Default: Date.now}, // fin de la estructura de la fecha
    hidden: {type: Boolean, Default: false}, // fin de la estructura de la ocultación
    meta: {
        votes: Number,
        favs: Number
    } // fin de la estructura de la info meta
    
}); // fin de la creación del esquema para el blog