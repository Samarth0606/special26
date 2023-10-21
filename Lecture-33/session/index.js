const express = require('express');
const app = express();
const session = require('express-session')


app.use(session({
    secret: 'maihugian',
    resave: false,
    saveUninitialized: true,
    // cookie: { secure: true }
}))


app.get('/setsession' , (req,res)=>{
    req.session.username = 'samarth';
    res.send('session mei username gya')
})

app.get('/getsession' , (req,res)=>{
    let {username='anonymous'} = req.session;
    res.send(username);
})

app.listen(5050 , ()=>{
    console.log('server connected at port 5050')
})