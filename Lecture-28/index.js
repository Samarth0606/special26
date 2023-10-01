const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set('strictQuery' , true);
mongoose.connect('mongodb://127.0.0.1:27017/special26')
.then(()=>{
    console.log("DB connected succesfully")
})
.catch((err)=>{
    console.log("error while connecting");
    console.log(err)
})

// create your schema -> blueprint
let movieSchema  = new mongoose.Schema({
    name:String,
    imdb:Number,
    isWatched:Boolean
})

// model -> js class -> singular , Capital start
let Movie =  mongoose.model('Movie' , movieSchema );

// console.log(Movie);
let movie = new Movie({name:"spiderman",imdb:6.5,isWatched:false});
console.log(movie);
// movie.save()
// .then(()=>{console.log("movie added")})
// .catch(()=>{console.log("not added")})

app.listen(8080 , ()=>{
    console.log('server connected at port 8080')
})