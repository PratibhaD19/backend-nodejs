const authorModel=require("../model/authorModel")



let createAuthor=async function(req,res){
    let data= req.body
    let saveData=await authorModel.create(data)
    res.send({msg:saveData,status : true})

}

module.exports.myAuthor=createAuthor