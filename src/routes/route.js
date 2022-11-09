const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const commonMV=require("../middleware/MW")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users-create", userController.createUser  )

router.post("/login", userController.loginUser)

router.post("/users/:userId/posts", userController.postMessage)

//The userId is sent by front end
router.get("/users/:userId",commonMV.Authentication,commonMV.authorization, userController.getUserData)

router.put("/users/:userId",commonMV.Authentication,commonMV.authorization, userController.updateUser)

router.delete("/user-delete/:userId",commonMV.Authentication,commonMV.authorization,userController.deleteUser)



module.exports = router;