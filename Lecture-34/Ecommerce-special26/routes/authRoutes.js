const express = require('express');
const User = require('../models/User');
const router = express.Router(); //mini instance/application;
const passport = require('passport')

router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})

router.post('/register' , async (req,res)=>{
    let {email , password , username} = req.body;
    let user = new User({email , username});
    let newUser = await User.register(user , password);
    res.redirect('/login');
})


router.get('/login' , (req,res)=>{
    res.render('auth/login');
})


router.post('/login' , passport.authenticate('local', 
    { 
        failureRedirect: '/login', 
        failureMessage: true 
    })  , (req,res)=>{
        // console.log(req.user , "sam");
        req.flash('success' , 'welcome back')
        res.redirect('/products')
})

// original
router.get('/logout' , (req,res)=>{
    req.logout(()=>{
        req.flash('success' , 'logged out successfully')
        res.redirect('/login');
    })
})


// export so that you can use it in app.ja
module.exports = router;