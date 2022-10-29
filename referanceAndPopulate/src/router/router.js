const express=require("express")
const router=express.Router()
const authorController=require("../controller/AuthorController")
const publisherController=require("../controller/publisherController")
const bookController=require("../controller/BookController")


router.post("/newAuthor/create",authorController.myAuthor)
router.post("/newPublisher/create",publisherController.myPublisher)
router.post("/newBook/create",bookController.myBook)
router.get("/getAll/Books",bookController.myGetBooks)
router.patch("/update",bookController.myUpdate)




module.exports=router;