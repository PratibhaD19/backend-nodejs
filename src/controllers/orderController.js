const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")
let productModel = require("../models/productModel")


const placeOrder = async function (req, res) {
    let data = req.body
    let { userId, productId } = data

    if (!userId) return res.send("please enter UserId")
    let checkUser = await userModel.findById(data.userId)
    if (!checkUser) return res.send("no user found")

    if (!productId) return res.send("please provide productId")
    let checkProduct = await productModel.findById(data.productId)
    if (!checkProduct) return res.send("no product found")


    //if user is not freeAppUser and his balnce is greater than price

    if(!req.headerStatusFree && checkUser.balance >= checkProduct.price) { //headerStatusFree <===isComes From middleware
        checkUser.balance = checkUser.balance - checkProduct.price
        await checkUser.save() 

        data.amount = checkProduct.price
        data.isFreeAppUser = false
        let orderCreated = await orderModel.create(data) 
        return res.send({status: true, data :orderCreated})
    } else if(!req.headerStatusFree) {
    //Paid app and user balance is less than product price
        return res.send({status: false, message:"User dosent have sufficient balance"})
    } else {
    // Free app
        data.amount = 0
        data.isFreeAppUser = true

    let saveData = await orderModel.create(data)
    res.send({ msg: saveData })

}

}


module.exports.myPlaceOrder=placeOrder