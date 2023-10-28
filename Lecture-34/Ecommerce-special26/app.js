const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const methodOverride = require('method-override')
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('passport');
const LocalStrategy = require('passport-local');
const User = require('./models/User');

const productRoutes = require('./routes/productRoutes');
const reviewRoutes = require('./routes/reviewRoutes');
const authRoutes = require('./routes/authRoutes');

// database connection
mongoose.set('strictQuery' , true); //version 7 ki vajah se
mongoose.connect('mongodb://127.0.0.1:27017/special26') //returns a promise
.then(()=>{console.log("DB CONNECTED")})
.catch((err)=>{console.log("error in DB" , err)})

//setting templates
app.set('view engine' , 'ejs')
app.set('views' , path.join(__dirname , 'views'));
// setting static files
app.use(express.static(path.join(__dirname,'public')));
app.use(express.urlencoded({extended:true})) //body parsing middleware
app.use(methodOverride('_method'))//method override

let configSession = {
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
}
app.use(session(configSession));
app.use(flash());
app.use((req,res,next)=>{
    res.locals.success = req.flash('success');
    res.locals.error = req.flash('error');
    next();
})

app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(new LocalStrategy(User.authenticate()));

// using all the routes in order to verify the path an run the function
app.use(productRoutes);
app.use(reviewRoutes);
app.use(authRoutes);


// adding dummy data to the collection
// seedDB()


// running on port
const PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server connected at port: ${PORT}`);
})