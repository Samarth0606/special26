const express = require('express');
const app = express();
const path = require('path');


app.set('view engine' , 'ejs' )
app.set('views' , path.join(__dirname , 'views'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));


// app.use('/cat' , express.static(path.join(__dirname , 'public')));
let Todos = ['mukesh' , 'puneet' , 'bheem' , 'chutki'];

app.use('/' , express.static(path.join(__dirname , 'public')));

app.get('/' , (req,res)=>{
    res.send('csr vs ssr')
})

app.get('/todos' , (req,res)=>{
    if(req.xhr){
        console.log('ajax req')
        res.json(Todos) //coneverts js objects into json
    }
    else{
        console.log('traditional req.');
        res.render('index' , {Todos})
    }
})

app.post('/todos' , (req,res)=>{
    let {todo} = req.body;
    // console.log(req.body)
    Todos.push(todo);
    // res.json({msg:'todos are pushed successfully'})
    res.redirect('/todos');
})

app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})