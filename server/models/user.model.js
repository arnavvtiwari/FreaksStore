const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: Number,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    quote:{
        type: String,
    },  
});

const userModel = mongoose.model('User', User);
module.exports = userModel;