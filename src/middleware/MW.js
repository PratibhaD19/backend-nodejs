const jwt = require("jsonwebtoken")


const Authentication = async function (req, res, next) {
    try {
        let token = req.headers["x-Auth-Token"]
        if (!token) token = req.headers["x-auth-token"]
        if (!token) return res.status(400).send({ status: false, msg: "Token is required." })

        let decodeToken = jwt.verify(token, "Hii-I-am-pratibha-this-is-my-secreate-key")
        req["decodedToken"] = decodeToken
        if (!decodeToken) return res.status(400).send({ status: false, msg: "Token is invlid" })

        next()
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}




let authorization = async function (req, res, next) {
    try {
        let loggedInUserId = req.decodedToken.userId
        let reqestedUserId = req.params.userId
        // console.log(reqestedUserId,loggedInUserId)
        if (reqestedUserId != loggedInUserId) {
            return res.status(403).send({ status: false, message: "no permission" })
        }
        next()
    }
    catch (error) {
        res.status(500).send({ error: error.message })
    }
}



module.exports.Authentication = Authentication
module.exports.authorization = authorization