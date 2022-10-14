const express = require('express');
const router = express.Router();///test-you
//importing a custom module
const xyz = require('../logger')
const pqr= require("../util/helper")
const stu=require("../validator/formatter")
//importing external package
const underscore = require('underscore')
const lodash= require("../lodash/chunk")



router.get('/test-mee',function(req,res){
    console.log("I am inside route",xyz.myWelcome())
    console.log("inside router",pqr.time());
    console.log("I am inside route",pqr.getBatch())
    console.log("Hii succesfully trim word",stu.myTrim())
    console.log("Succesufully turn upperCase to lowerCase word",stu.myLower())
    console.log("succesfully turn into uppercase",stu.myUpper())

     res.send("kuch bhi")
})


router.get('/test-you',function(req,res){

   console.log(lodash.myLodash())

    //console.log(_.chunk([Jan,feb,march,april,may,june,jully,august,september,october,november,december], 4))
    
    res.send("yeehhhhhhhh")




})












// router.get('/test-me', function (req, res) {
//     //Calling the components of a different custom module
//     console.log("Calling my function ",xyz.myFunction())
//     console.log("The value of the constant is ",xyz.myUrl)
    //Trying to use an external package called underscore
    // let myArray = ['Akash', 'Pritesh', 'Sabiha']
    // let result = underscore.first(myArray)
    // console.log("The result of underscores examples api is : ", result)
    
    // res.send('My first ever api!')

    //To be tried what happens if we send multiple response
    //res.send('My second api!')
//});

module.exports = router;

