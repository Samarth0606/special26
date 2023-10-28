const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

// creating user schema
let userSchema = new mongoose.Schema({
    email:{
        type: String , 
        trim: true,
        required: true
    }
})

userSchema.plugin(passportLocalMongoose);


// creating model
let User = mongoose.model('User' , userSchema )

module.exports = User; //sending the model to be used anywhere when required


