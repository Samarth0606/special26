const express = require('express');
const User = require('../models/User');
const router = express.Router(); //mini instance/application;
const passport = require('passport')

router.get('/register' , (req,res)=>{
    res.render('auth/signup');
})

router.post('/register' , async (req,res)=>{
    try{
        let {email , password , username , role} = req.body;
        let user = new User({email , username , role});
        let newUser = await User.register(user , password);
        // for directly redering instead of logging in again
        req.login(newUser, function(err) {        //adding from here 
            if (err) { return next(err); }
            req.flash('success' , 'welcome, you are registered successfully')
            return res.redirect('/products');
        });
    }
    catch(e){
        req.flash('error' , e.message);
        return res.redirect('/products');
    }
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
        req.flash('success' , 'welcome back ')
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