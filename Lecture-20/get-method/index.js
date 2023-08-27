const express = require('express'); //func
const app = express() //obj

// http request method -> GET


app.get('/' , (req,res)=>{
    console.log("hi i am root route");
    res.send('<h1> slash </h1>')
})

app.get('/cat' , (req,res)=>{
    console.log("hi i am a cat");
    res.send('<h1> Billi Mausi </h1>')
})

app.get('/dog' , (req,res)=>{
    console.log("hi i am a dog");
    res.send('<h1> bhau bhau facebook </h1>')
})

app.get('*' , (req,res)=>{
    console.log("wrong url");
    res.send('<h1> sorry page not found </h1>')
}) 


app.listen(8080 , ()=>{
    console.log("server connected at 8080")
} )