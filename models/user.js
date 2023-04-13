const mongoose = require('mongoose');
const userschema = new mongoose.Schema({
   
    FName:{
        type:String,
        require:true
    },
    LName:{
        type:String,
        require:true
    },
    Address:{
        type:String,
        require:true
    },
    PhoneNo:{
        type:Number,
        require:true
    },
    EmailId:{
        type:String,
        require:true
    },
    Password:{
        type:String,
        require:true
    }
});

module.exports = mongoose.model('users',userschema);