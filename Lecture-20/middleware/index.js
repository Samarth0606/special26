
const express = require('express'); //func
const app = express() //obj


// middleware


app.use( '/sam' , (req,res)=>{ //req & res -> objects
    console.log("mai hu mahesh");
    res.send('sam')
} )

app.use( '/samy' , (req,res)=>{ //req & res -> objects
    console.log("mai hu mahesh");
    res.send('samy')
} )


app.use( '/samarth' , (req,res)=>{ //req & res -> objects
    console.log("bro");
    res.send('samarth')
} )

// app.use( '/' , (req,res)=>{ //req & res -> objects
//     console.log("default");
//     res.send('slash ')
// } )


app.listen(8080 , ()=>{
    console.log("server connected at 8080")
} )