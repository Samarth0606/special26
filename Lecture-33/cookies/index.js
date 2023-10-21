const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser('hellomynameislakhan')) //middleware -> secret


app.get('/' , (req,res)=>{
    res.send('connected')
})

app.get('/setcookie' , (req,res)=>{
    res.cookie('mode' , 'dark');
    res.cookie('location' , 'delhi');
    res.cookie('username' , 'sam');
    res.send('cookie set hogyi');
})

app.get('/signed' , (req,res)=>{
    res.cookie('password' , 'hui-hui' , {signed:true});
    res.send('signed cookie bhejdi');
})

app.get('/checkcookie' , (req,res)=>{
    let {mode,password} = req.cookies;
    res.send(req.cookies);
    // res.send(mode , password );
})

app.get('/sign'  , (req,res)=>{
    // console.dir(req.signedCookies);
    res.send(req.signedCookies);
})


app.listen(5050 , ()=>{
    console.log('server connected at port 5050')
})