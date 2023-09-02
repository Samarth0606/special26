const express =  require('express');
const path =  require('path');

const app =  express();

app.set('view engine' , 'ejs')

app.set('views' , path.join(__dirname , 'views'))


app.get('/' , (req,res)=>{
    res.render('home')
})


app.listen(8080 , ()=>{
    console.log("server running at port 5050");
})
