const express= require('express')
const bodyParser= require('body-parser')
const route=require('./route/route')
const mongoose= require ('mongoose')
const app=express()


app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended:true}))
mongoose.connect("mongodb+srv://PratibhaDamodar:MWKQQUmJ4k4ZzFim@lithium01.ryxy9mx.mongodb.net/?retryWrites=true&w=majority",{
    useNewUrlParser:true})
    .then(()=>console.log("Mongodb is connected"))
    .catch((err)=>console.log(err))


    app.use('/', route)
    app.listen(process.env.PORT || 3000,function(){
        console.log("Express app running on port"+(process.env.PORT || 3000) )
        
    })




//     async function test()
// {
//     console.log("A")
//     await console.log("B")
//     console.log("C")
// }      
// test()
// console.log("D")
// console.log("E")
    




// async function test()
// {
//     console.log("2")
//     await console.log("3")
//     console.log("4")
// } 
// console.log("1")     
// test()
// console.log("5")
// console.log("E")
