const express=require('express')
const router=express.Router()
const bookController=require('../Controller/BookController')


router.post('/createBook/newBook',bookController.myBook)
router.get('/getBook',bookController.myGetBook)








module.exports=router