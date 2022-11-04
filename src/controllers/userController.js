const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

/*
  Read all the comments multiple times to understand why we are doing what we are doing in login api and getUserData api
*/
const createUser=async function(req,res){
  let data=req.body
  if(!data || !Object.keys(data).length>0) return res.send({msg:"Please enter the data."})
  let savedData= await userModel.create(data)
  return res.send({satus:true,data:savedData})
}

// const createLogin=async function(req,res){
  
// let data=req.body
// if(!data || !Object.keys(data).length>0) return res. send({msg:"Please enter the data."})
// let{emailId,password}=data
// let checkUser=await userModel.findOne({emailId:emailId,password:password})
// if(!checkUser) return res.send({msg:"emailId or password is not correct"})

// let token= jwt.sign({
//    userId : checkUser._id. toString(), //PayLoad
//    batch:"Lithium", 
//    organisation:"FunctionUp"
// },
// "functionup-plutonium-very-very-secret-key" )  //secreate key
// res.setHeader("x-auth-token",token)
// res.send({status:true, data:token})

// };

// const createLogin = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not correct",
//     });

//   // Once the login is successful, create the jwt token with sign function
//   // Sign function has 2 inputs:
//   // Input 1 is the payload or the object containing data to be set in token
//   // The decision about what data to put in token depends on the business requirement
//   // Input 2 is the secret
//   // The same secret will be used to decode tokens
//   let token = jwt.sign(
//     {
//       userId: user._id.toString(),
//       batch: "plutonium",
//       organisation: "FUnctionUp",
//     },
//     "functionup-plutonium-very-very-secret-key"
//   );
//   //res.setHeader("x-auth-token", token);
//   res.send({ status: true, data: token });
// };

const createLogin = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });


    let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "Plutonium",
      organisation: "FunctionUp",
    },
    "functionup-plutonium"
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

let getUser=async function(req,res){
  let paramsData=req.params.userId
  let userGet=await userModel.findById(paramsData)
  if(!userGet) return res.send({msg:"No user found"})
  res.send({data:userGet})
}

let userUpdate=async function(req,res){
  let paramsData=req.params.userId
  let data=req.body
  let updatedUser=await userModel.findById(paramsData)
  if(!updatedUser) return res.send({msg:"no user found to update data"})
  let saveUpdate=await userModel.findOneAndUpdate({_id:paramsData},data)
  return res.send({data:saveUpdate,status:true})

}


let deleteUser=async function(req,res){
  let paramsData=req.params.userId
  let findUser=await userModel.findById(paramsData)
  if(!findUser) return res.send({msg:"no user found"})
  let userDelete=await userModel.findOneAndUpdate({_id:paramsData},{isDeleted:true},{new:true})
  return res.send({data:userDelete,msg:true})
}



// const createUser = async function (req, res) {
//   //You can name the req, res objects anything.
//   //but the first parameter is always the request 
//   //the second parameter is always the response
//   let data = req.body;
//   let savedData = await userModel.create(data);
//   console.log(req.newAtribute);
//   res.send({ msg: savedData });
// };

// const loginUser = async function (req, res) {
//   let userName = req.body.emailId;
//   let password = req.body.password;

//   let user = await userModel.findOne({ emailId: userName, password: password });
//   if (!user)
//     return res.send({
//       status: false,
//       msg: "username or the password is not corerct",
//     });

//   // Once the login is successful, create the jwt token with sign function
//   // Sign function has 2 inputs:
//   // Input 1 is the payload or the object containing data to be set in token
//   // The decision about what data to put in token depends on the business requirement
//   // Input 2 is the secret (This is basically a fixed value only set at the server. This value should be hard to guess)
//   // The same secret will be used to decode tokens 
//   let token = jwt.sign(
//     {
//       userId: user._id.toString(),
//       batch: "Lithium",
//       organisation: "FunctionUp",
//     },
//     "functionup-Lithium-very-very-secret-key-Pratibha"
//   );
//   res.setHeader("x-auth-token", token);
//   res.send({ status: true, token: token });
// };

// const getUserData = async function (req, res) {
//   let token = req.headers["x-Auth-token"];
//   if (!token) token = req.headers["x-auth-token"];

//   //If no token is present in the request header return error. This means the user is not logged in.
//   if (!token) return res.send({ status: false, msg: "token must be present" });

//   console.log(token);

//   // If a token is present then decode the token with verify function
//   // verify takes two inputs:
//   // Input 1 is the token to be decoded
//   // Input 2 is the same secret with which the token was generated
//   // Check the value of the decoded token yourself

//   // Decoding requires the secret again. 
//   // A token can only be decoded successfully if the same secret was used to create(sign) that token.
//   // And because this token is only known to the server, it can be assumed that if a token is decoded at server then this token must have been issued by the same server in past.
//   let decodedToken = jwt.verify(token, "functionup-Lithium-very-very-secret-key-Pratibha");
//   if (!decodedToken)
//     return res.send({ status: false, msg: "token is invalid" });

//   let userId = req.params.userId;
//   let userDetails = await userModel.findById(userId);
//   if (!userDetails)
//     return res.send({ status: false, msg: "No such user exists" });

//   res.send({ status: true, data: userDetails });
//   // Note: Try to see what happens if we change the secret while decoding the token
// };

// const updateUser = async function (req, res) {
//   // Do the same steps here:
//   // Check if the token is present
//   // Check if the token present is a valid token
//   // Return a different error message in both these cases

//   let userId = req.params.userId;
//   let user = await userModel.findById(userId);
//   //Return an error if no user with the given id exists in the db
//   if (!user) {
//     return res.send("No such user exists");
//   }

//   let userData = req.body;
//   let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData);
//   res.send({ status: updatedUser, data: updatedUser });
// };

module.exports.createUser = createUser;
module.exports.createLogin = createLogin;
module.exports.getUser = getUser;
module.exports.userUpdate = userUpdate;
module.exports.deleteUser=deleteUser
