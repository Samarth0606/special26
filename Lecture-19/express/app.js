

const express = require('express'); //function ✅ , obj ❌
const app = express() // obj ✅
// this app variable is the entire instance of your application



// middleware -> RUNS for every incoming request
app.use( (req , res)=>{
    console.log("mai hu mahesh, harr baar chalunga");
    // console.log(req);
    // console.log(res);
    res.send('mahesh')
} )



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
} )

// range -> 2000-9000
// fontend default port -> 3000
// backend default port -> 8080