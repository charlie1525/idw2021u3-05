const mongoose = require('mongoose');
const blogSchema = require('./blog-Schema');

const timme = Date.now();
const date = new Date(timme);

mongoose.connect('mongodb://localhost:27017/eje05');

var Blogs = mongoose.model('Blogs',blogSchema,'blog');

var blog1 =  new Blogs({
    title: 'The newest Blog ever',
    author: 'Carlos Fregoso',
    body: 'This is the first publication of the best and newest blog in the web, you can find lots of themes that I like and I´ll leave the commets open for healthy discussion',
    meta: {votes:10,favs:2}
});

var blog2 =  new Blogs({
    title: 'Just anotehr blog',
    author: 'Alexis torres',
    body: 'this blog it´s focused on the day-to-day of my person, isn´t a blog of critics but I will upload things that i think are interesting',
    comments: [
        {
            body: 'One of my favorite blogs ever, keep doing it bro',
            date: date
        }
    ],
    meta: {votes:19990,favs:1982}
}); 


// <--------------------------------------------------------------------- fin de la creacion de los blogs

blog2.save(function(error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('Blog saved sucessfully');
    process.exit(1);
});// fin de la funcion para guardar el blog
