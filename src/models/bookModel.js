const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {type:String,
    require:true},
    price: {
        indianPrice: String,
        europePrice: String
    },
    year:{
        type:Number,
        default:2021
    }, 
    tags: [String],
    authorName: String,
    totalPages:Number,
    isPublished:Boolean,
    stockAvailable: Boolean
    
    //sales: {type: Number, default: 10}
}, { timestamps: true });


module.exports = mongoose.model('BookModel', bookSchema) //users

//Validation:
//require:true
//unique
// default

//String
//Number
//Date
//Boolean
// Arrays
// Object
// ObjectId
// Buffer - not cover
