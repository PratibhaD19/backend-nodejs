const mongoose=require("mongoose")
const ObjectId= mongoose.Schema.Types.ObjectId


const booksSchema=new mongoose.Schema({

    name:String,
    author:{
        type:ObjectId,
        ref:"newAuthor",
        require:true
    },
    price:Number,
    publisher:{
        type:ObjectId,
        ref:"newPublisher",
        require:true
    },
    isHardCover: {
        type: Boolean,
        default: false
    }
})

module.exports=mongoose.model("newBook",booksSchema)