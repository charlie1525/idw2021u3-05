const mongoose = require('mongoose');
const blogSchema = require('./blog-Schema');

mongoose.connect('mongodb://localhost:27017/eje05');

var Blogs = mongoose.model('Blogs',blogSchema,'blog');

var blog1 =  new Blogs({
    title: 'The newest Blog ever',
    author: 'Carlos Fregoso',
    body: 'This is the first publication of the best and newest blog in the web, you can find lots of themes that I like and I´ll leave the commets open for healthy discussion',
    meta: {votes:10,favs:2}
}); // fin de la incersión de los blogs

blog1.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('Blog saves succesfully!!');
    process.exit(0);
}); // fin de la funcion para guardar el blog

Blogs.find({},function(error,docs){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('<----- Consulta general ------>');
    console.log(docs);
}); // fin de la funcion para buscar de forma general