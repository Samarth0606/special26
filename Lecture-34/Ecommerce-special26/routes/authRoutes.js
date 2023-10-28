const express = require('express');
const router = express.Router(); //mini instance/application;

router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})


router.get('/login' , (req,res)=>{
    res.render('auth/login');
})




// export so that you can use it in app.ja
module.exports = router;