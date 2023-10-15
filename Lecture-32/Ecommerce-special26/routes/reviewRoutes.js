const express = require('express');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router(); //mini instance/application;


router.post('/products/:id/review' , async(req,res)=>{
    // console.log(req.body);
    let {rating, comment} = req.body;
    let {id} = req.params;
    let product = await Product.findById(id);
    let newReview = new Review({rating, comment});
    await newReview.save();
    product.reviews.push(newReview);//objectId
    await product.save();
    res.redirect(`/products/${id}`)
})


// export so that you can use it in app.ja
module.exports = router;