const express = require('express');
const Product = require('../models/Product');
const router = express.Router(); //mini instance/application;


// READ
router.get('/products' , async (req,res)=>{
    let allProducts = await Product.find();
    res.render('product/index' , {allProducts})
})

// export so that you can use it in app.ja
module.exports = router;