const express = require('express');
const router = express.Router();
const UserController= require("../controllers/userController")
const orderController= require("../controllers/orderController")
const productController=require("../controllers/productController")
const commonMW = require ("../middlewares/commonMiddlewares")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//Can we set the 'next' input parameter in a route handler?
//What is the primary difference between a middleware and a route handler?

router.post("/create-User",commonMW.IcheckHeader, UserController.createUser)

router.post("/create-product",productController.myProducts)

router.post("/create-order", commonMW.IcheckHeader,orderController.myPlaceOrder)

module.exports = router;