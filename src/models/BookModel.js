const mongoose = require('mongoose')



let bookSchema = new mongoose.Schema({
 
    bookName: String,
    authorName: {
        type:String
},
    category: String,
    year: Number


},{timestamps:true})







module.exports = mongoose.model('BookModel', bookSchema)  //BookModels