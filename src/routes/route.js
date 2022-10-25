const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
//const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createBook",BookController.myBookCreate)

router.get("/getBook/list",BookController.myBookList)

router.post("/bookList",BookController.myBookInYear)

router.post('/particularBook',BookController.myParticularBook)

router.get("/getINR",BookController.myXINRBooks)

router.get("/randomBooks",BookController.myRandomBooks)



//6th




// router.post("/createUser", UserController.createUser  )

// router.get("/getUsersData", UserController.getUsersData)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

module.exports = router;