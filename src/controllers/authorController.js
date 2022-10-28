const authorModel= require("../models/authorModel")
const bookModel=require("../models/bookModel")

const createAuthor= async function (req, res) {
    let data= req.body
    let {author_id}=data
    if(!author_id) return res.send({msg:"please provide the authorid"})
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
}


const findAuthor=async function(req,res){
    let findData=await bookModel .findOneAndUpdate({name:"Two states"},{$set:{price:100}},{new:true})
    let finalData = await authorModel.find({author_id:findData.author_id}).select("author_name")
    let prices = findData.price
    res.send({msg:finalData,prices})
}

// const getUsersData= async function (req, res) {
//     let allUsers= await authorModel.find()
//     res.send({msg: allUsers})
// }

module.exports.createAuthor= createAuthor
module.exports.findAuthor= findAuthor
