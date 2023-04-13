const mongoose = require('mongoose');
const usermetadataSchema = new mongoose.Schema({
    userID:{
        type:String,
        require:true
    },
    cart:{
        type:Array,
        require:true
    },
    wishlist:{
        type:Array,
        require:true
    },
    buyproducts:{
        type:Array,
        require:true
    }
});
 module.exports = mongoose.model("usermetadata",usermetadataSchema);
