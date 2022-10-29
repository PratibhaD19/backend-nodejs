const mongoose=require("mongoose")


const publisherSchema= new mongoose.Schema({

name:String,
headquater:String

})


module.exports=mongoose.model("newPublisher",publisherSchema)