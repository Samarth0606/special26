const express = require('express');
const app = express();
const path =  require('path')


let comments = [
    {
        id:0,
        username: "Sam",
        comment: "billo bagey billye da ki kregi"
    },
    {
        id:1,
        username: "Niharika",
        comment: "bagey bagey billye da ki kregi"
    },
    {
        id:2,
        username: "Asif",
        comment: "hum pe to hai hi 9"
    },
    {
        id:3,
        username: "Atul",
        comment: "katai naughty hora hai brother"
    }
]


app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname , 'public')))
app.use(express.urlencoded({extended:true})); //form-data middleware


app.get('/' , (req,res)=>{
    res.send('<h1>connected to root</h1>')
})

// display all the comments
app.get('/comments' , (req,res)=>{
    res.render('index' , {comments}) 
})

// show form to add a new comment
app.get('/comment/new' , (req,res)=>{
    res.render('new')
})

// to actually add in the database/array
app.post('/comments' , (req,res)=>{
    // console.log(req.body);
    let {username , comment} = req.body;
    // comments.push({ username:username , comment:comment , id:comments.length })
    comments.push({ username , comment , id:comments.length })
    res.redirect('/comments');
})

// to show a particular product
app.get('/comments/:commentId' , (req,res)=>{
    // console.log(req.params);
    let {commentId} = req.params; //string
    let foundComment = comments.find((item)=>{ return item.id == commentId });
    // console.log(foundComment);
    // res.send("params milgye");
    res.render('show' , {foundComment} )
} )



app.listen(8080 , ()=>{
    console.log("server connected at port 8080")
})