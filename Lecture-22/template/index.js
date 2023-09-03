const express =  require('express');
const path =  require('path');

const app =  express();

app.set('view engine' , 'ejs')

app.set('views' , path.join(__dirname , 'views'))

app.use(express.static(path.join(__dirname, 'public')))

app.get('/' , (req,res)=>{

    let randomNum = Math.floor( Math.random()*25 )

    res.render('home' , {randomNum} )
})

app.get('/index' , (req,res)=>{
    res.render('index')
})


app.listen(5050 , ()=>{
    console.log("server running at port 5050");
})
