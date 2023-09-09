const express = require('express');
const app = express();
const path = require('path');


app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'));
app.use(express.urlencoded({ extended: true }));//body-parsing middleware for form-data
app.use(express.json());//body-parsing middleware for json

// root route
app.get('/' , (req,res)=>{
    res.render('home');
})

app.get('/user' , (req,res)=>{
    // console.log(req.query);
    let {userName , passWord} = req.query;
    res.send(`username aaya ${userName} and pass aya ${passWord}`)
})

app.post('/user' , (req,res)=>{
    console.log(req.body); //new thing for yu
    res.send('post req chali gayi taliyan')
})



app.listen(8080 , ()=>{
    console.log("serber connected at port 8080")
})