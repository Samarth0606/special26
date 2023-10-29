const express = require('express');
const { validateProduct , isLoggedIn} = require('../middleware');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router(); //mini instance/application;


// READ
router.get('/products' , async (req,res)=>{
    try{
        let allProducts = await Product.find();
        res.render('product/index' , {allProducts})
    }
    catch(e){
        res.status(500).render('product/error')
    }
})

// SHOW A NEW FORM
router.get('/product/new' , isLoggedIn , (req,res)=>{
    try{
        res.render('product/new');
    }
    catch(e){
        res.status(500).render('product/error' , {err:e.message})
    }
})

// ACTUALLY ADDING IN THE DATABASE
router.post('/products' , isLoggedIn, validateProduct , async(req,res)=>{
    try{
        let {name,img , price , desc} = req.body;
        await Product.create({name,img , price , desc , author:req.user._id});
        req.flash('success' , 'Product added successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('product/error' , {err:e.message})
    }
})

// TO SHOW A PARTICULAR PRODUCT
router.get('/products/:id' , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id).populate('reviews');
        // console.log('sam1', foundProduct , 'sam2')
        res.render('product/show' , {foundProduct})
    }
    catch(e){
        res.status(500).render('product/error' , {err:e.message})
    }
})

// FORM TO EDIT A PARTIICULAR PRODUCT
router.get('/products/:id/edit' , isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        let foundProduct = await Product.findById(id);
        console.log('sam1',foundProduct,'sam');
        res.render('product/edit' , {foundProduct})
    }
    catch(e){
        res.status(500).render('product/error' , {err:e.message})
    }
})


// TO ACTUALLY CHANGE IN db
router.patch('/products/:id' , isLoggedIn , validateProduct,  async(req,res)=>{
    try{
        let {id} = req.params;
        let {name , img , price , desc} = req.body;
        await Product.findByIdAndUpdate( id , {name , img , price , desc});
        req.flash('success' , 'Product edited successfully');
        res.redirect(`/products/${id}`);
    }
    catch(e){
        res.status(500).render('product/error' , {err:e.message})
    }
})

// DELETE THE EXISTING PRODUCT
router.delete('/products/:id' , isLoggedIn , async(req,res)=>{
    try{
        let {id} = req.params;
        // adding from here to delete the reviews as well
        let product = await Product.findById(id); //name, price , desc , img , reviews
    
        for(let ID of product.reviews){
            await Review.findByIdAndDelete(ID);
        }
    
        // await Product.findByIdAndDelete(idd);//for showing error
        await Product.findByIdAndDelete(id);
        req.flash('success' , 'Product deleted successfully');
        res.redirect('/products');
    }
    catch(e){
        res.status(500).render('product/error' , {err:e.message})
    }
})


// export so that you can use it in app.js
module.exports = router;