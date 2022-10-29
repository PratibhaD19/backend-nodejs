const publisherModel=require("../model/PublisherModel")



const createPublisher=async function(req,res){
    let data= req.body
    let saveData= await publisherModel .create(data)
    res.send({msg:saveData,status:true})
}


module.exports.myPublisher=createPublisher