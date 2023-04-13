const mongoose = require('mongoose');
const bookDataSchema = new  mongoose.Schema({
        
    title:{
        type:String,
        require:true,
        default:""
    },
    img:{
        type:String,
        require:true,
        default:""
    },
    author:{
        type:String,
        require:true,
        default:"NA"
    },
    seller:{
        type:String,
        require:true,
        default:"NA"
    },
    price:{
        type:String,
        require:true,
        default:""
    },
    discount:{
        type:String,
        require:true,
        default:"0"
    },
    category:{
        type:Array,
        require:true,
        default:[]
    },
    // cart:{
    //     type:Boolean,
    //     require:true,
    //     default:false
    // },
    // wishlist:{
    //     type:Boolean,
    //     require:true,
    //     default:false
    // },
    infomation:{
        type:Object,
        require:true,
        default:{}
    },
    description:{
        type:String,
        require:true,
        default:""
    },
    
    // discountAmount:{
    //     type:Number,
    //     require:true,
    //     default:0
    // },
    
    quantity:{
        type:Number,
        require:true,
        default:1
    }
});

// very IMP 
module.exports = mongoose.model('books',bookDataSchema);