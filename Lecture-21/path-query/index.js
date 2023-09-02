const express = require('express');
const app = express();

//WRONG APPROACH --->

// app.get('/r/cat' , (req,res)=>{
//     console.log("cat")
// })

// app.get('/r/dog' , (req,res)=>{
//     console.log("dog")
// })
// app.get('/r/lion' , (req,res)=>{
//     console.log("lion")
// })



// RIGHT APPROACH -->
app.get('/r/:murga' , (req,res)=>{
    console.log(req.params)
    // console.log(req.params.murga)
    let {murga} = req.params;
    console.log(murga);
    res.send(`<h1> hi i am ${murga} </h1>`)
})


// ----------------------------------------------

app.get('/search' , (req,res)=>{
    // console.log(req.query.last)
    // console.log(req.query.first)
    let {last , first} = req.query;
    console.log(first)
    console.log(last)
    res.send(`<h1>hi i am ${first} ${last}</h1>`)
})



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})