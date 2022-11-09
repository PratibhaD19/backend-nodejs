const jwt = require("jsonwebtoken");
const { findOne } = require("../models/userModel");
const userModel = require("../models/userModel");

//============================================CREATE USER==========================================================

const createUser = async function (req, res) {
  try {
    let data = req.body;
    let savedData = await userModel.create(data);
    // console.log(req.newAtribute);
    return res.status(201).send({ msg: savedData });
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};
//===========================================LOGIN USER====================================================

const loginUser = async function (req, res) {
  try {
    let datas = req.body
    let { emailId, password } = datas
    let findUser = await userModel.findOne({ emailId: emailId, password: password })
    if (!findUser) return res.status(404).send({ status: false, msg: "No user Found" })

    let token = jwt.sign({
      userId: findUser._id.toString(),
      batch: "lithium"
    },
      "Hii-I-am-pratibha-this-is-my-secreate-key"
    )
    res.setHeader("x-auth-token", token)
    res.status(201).send({ status: true, data: token })
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};

//===========================================GET USER===============================================================

const getUserData = async function (req, res) {
  try {
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.status(404).send({ status: false, msg: "No such user exists" });

    res.status(200).send({ status: true, data: userDetails });
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
};

//=========================================UPDATE USER=====================================================


const updateUser = async function (req, res) {
  try {
    let data = req.body
    let takeId = req.params.userId
    let findUser = await userModel.findById(takeId)
    if (!findUser) return res.status(404).send({ status: false, msg: "no user foud" })
    let updateData = await userModel.findOneAndUpdate({ _id: takeId }, data, { new: true })
    res.status(201).send({ status: true, data: updateData })
  }

  catch (error) {
    res.status(500).send({ error: error.message })
  }
};

//============================================DELETE USER======================================================

const deleteUser = async function (req, res) {
  try {
    let data = req.params.userId
    let getUser = await userModel.findById(data)
    if (!getUser) return res.status(404).send({ status: false, data: "No user found" })
    let deleteUser = await userModel.findOneAndUpdate({ _id: getUser }, { isDeleted: true }, { new: true })
    res.status(201).send({ status: true, msg: deleteUser })
  }
  catch (error) {
    res.status(500).send({ error: error.message })
  }
}


const postMessage = async function (req, res) {
    let message = req.body.message
    // Check if the token is present
    // Check if the token present is a valid token
    // Return a different error message in both these cases
    let token = req.headers["x-auth-token"]
    if(!token) return res.send({status: false, msg: "token must be present in the request header"})
    let decodedToken = jwt.verify(token, 'functionup-thorium')

    if(!decodedToken) return res.send({status: false, msg:"token is not valid"})
    
    //userId for which the request is made. In this case message to be posted.
    let userToBeModified = req.params.userId
    //userId for the logged-in user
    let userLoggedIn = decodedToken.userId

    //userId comparision to check if the logged-in user is requesting for their own data
    if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

    let user = await userModel.findById(req.params.userId)
    if(!user) return res.send({status: false, msg: 'No such user exists'})
    
    let updatedPosts = user.posts
    //add the message to user's posts
    updatedPosts.push(message)
    let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})

    //return the updated user document
    return res.send({status: true, data: updatedUser})
}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
module.exports.postMessage = postMessage
