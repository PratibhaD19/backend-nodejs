
let checkHeader=async function(req,res,next){
    let headers = req.headers
    let headerType = headers["isFreeAppUser"]
    if(!headerType) {
        headerType = headers["isfreeappuser"]
    }
    if(!headerType) {
        return res.send({status: false, message: "A mandatory header is missing"})
    }

    if(headerType == 'true') {
        req.headerStatusFree = true
    } else {
        req.headerStatusFree = false
    }

    next()
}
 
    
    
    
    
    
    
    
    
    module.exports.IcheckHeader= checkHeader
