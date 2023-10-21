const express = require('express');
const { validateReview } = require('../middleware');
const Product = require('../models/Product');
const Review = require('../models/Review');
const router = express.Router(); //mini instance/application;


router.post('/products/:id/review' , validateReview  , async(req,res)=>{
    // console.log(req.body);
    try{
        let {rating, comment} = req.body;
        let {id} = req.params;
        let product = await Product.findById(id);
        let newReview = new Review({rating, comment});
        await newReview.save();
        product.reviews.push(newReview);//objectId
        await product.save();
        res.redirect(`/products/${id}`)
        // console.log('hogya')
    }
    catch(e){
        res.status(500).render('product/error' , {err:e.message})
    }
})


// export so that you can use it in app.ja
module.exports = router;