const bookModel = require('../models/BookModel')


let createBook = async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    res.send({ data: saveData, status: true })
}

let getBook = async function (req, res) {

    let allBook = await bookModel.find().select({bookName:2, authorName:1,_id:0}).limit(1)
    res.send({ data: allBook, status: true })
}



module.exports.myBook = createBook
module.exports.myGetBook = getBook



