const mongoose = require("mongoose")


let authorSchema = new mongoose.Schema({

    authorName: String,
    age: Number,
    address: String,
    ratings: Number

})

module.exports=mongoose.model ("newAuthor", authorSchema)