const express = require('express');
const app = express();

//middleware -> function -> harr incoming request par chale -> req,res,next
// app.use( (req,res,next)=>{
//     console.log("jo kaam krna tha krlia");
//     // next();
// } )

//middleware -> security check
const verify = (req,res,next)=>{
    let {password} = req.query; 
    if(password != "orange"){
        return res.send("Invalid Password");
    }
    else{
        next(); //ab flow ko aage lejaao sab sahi hai yahan tak
    }
}

app.get('/secret' , verify , (req,res)=>{
    res.send("mumbai ki na dilli waalo ki pinky hai paise vaalo ki")
})


// running on port
const PORT = 2323;
app.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`);
})