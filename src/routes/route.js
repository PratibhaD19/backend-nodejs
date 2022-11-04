const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const mw =require("../middelware/commonMV")



router.post("/users-create", userController.createUser  )

router.post("/login", userController.createLogin)

//The userId is sent by front end
router.get("/users/:userId",mw.checkHeader,userController.getUser)

router.put("/users/:userId",mw.checkHeader,userController.userUpdate)

router.delete("/users/:userId",mw.checkHeader,userController.deleteUser)

module.exports = router;