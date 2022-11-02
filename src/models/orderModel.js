const mongoose=require("mongoose")
    const ObjectId=mongoose.Schema.Types.ObjectId


    const orderSchema=new mongoose . Schema({

        userId:ObjectId,
        productId:ObjectId,
        isFreeAppUser:Boolean,
        date:String

    })
    module.exports=mongoose.model("order",orderSchema)