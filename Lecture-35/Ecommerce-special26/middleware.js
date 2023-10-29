
const Product = require("./models/Product");
const { productSchema, reviewSchema } = require("./schema");

const validateProduct = (req,res,next)=>{
    const {name, img, price , desc} = req.body;
    const {error} = productSchema.validate({name,img,price,desc});
    
    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('product/error' , {err:msg});
    }
    next();
}

const validateReview = (req,res,next)=>{

    const {rating, comment} = req.body;
    const {error} = reviewSchema.validate({rating,comment});

    if(error){
        const msg = error.details.map((err)=>err.message).join(',');
        return res.render('product/error' , {err:msg});
    }
    next();
}

const isLoggedIn = (req,res,next)=>{
    if(!req.isAuthenticated()){
        req.flash('error' , 'you need to login first');
        return res.redirect('/login');
    }
    next();
}


const isSeller =  (req,res,next)=>{
    if(!req.user.role){
        req.flash('error' , 'you donot have the permissions');
        return res.redirect('/products');
    }
    if(req.user.role !== "seller"){
        req.flash('error' , 'you donot have the permissions');
        return res.redirect('/products');
    }
    next();
}

const isProductAuthor = async(req,res,next)=>{
    let {id} = req.params;
    let product = await Product.findById(id);
    console.log(product.author);
    console.log(req.user._id);
    if(!product.author.equals(req.user._id)){
        req.flash('error' , 'you are not authorised users');
        return res.redirect('/products');
    }
    next();
}
module.exports = {validateProduct ,validateReview , isLoggedIn , isSeller , isProductAuthor} ;