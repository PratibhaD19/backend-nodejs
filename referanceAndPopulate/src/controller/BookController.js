const bookModel = require("../model/BookModel")
const authorModel = require("../model/authorModel")
const publisherModel = require("../model/PublisherModel")
const { find } = require("../model/PublisherModel")



const createBook = async function (req, res) {

    let data = req.body
    let { author, publisher } = data
    if (!author) return res.send("please provide authorId")
    if (!publisher) return res.send("please provide publisherId")

    let checkAuthor = await authorModel.findById(data.author)
    if (!checkAuthor) return res.send("no data authors found")

    let checkPublisher = await publisherModel.findById(data.publisher)
    if (!checkPublisher) return res.send("no data publishers found")

    let saveData = await bookModel.create(data)
    res.send({ msg: saveData, status: true })


}

//********************************************************************************************************** */

let getBook = async function (req, res) {

    let data = await bookModel.find().populate("author", "publisher")
    return res.send({ msg: data, status: true })

}

//****************************************************************************************************** */
const updateSpecificBooks = async function (req, res) {


    //Without populate
    let findIdByPublisher = await publisherModel.find({ name: { $in: ["Penguin", "HapperCollins"] } }).select({ _id: 1 })
    let findIdByRating = await authorModel.find({ rating: { $gt: 3.5 } }).select({ _id: 1 })

    //Using loop
    const arrOfPublisherId = []
    for (let i = 0; i < findIdByPublisher.length; i++) {
        arrOfPublisherId.push(findIdByPublisher[i]._id)
    }

    const arrOfRatings = []

    for (let i = 0; i < findIdByRating.length; i++) {
        arrOfRatings.push(findIdByRating[i]._id)
    }

    let setHardCover = await bookModel.updateMany({ publisher: { $in: arrOfPublisherId } }, { isHardCover: true }, { new: true })
    let updatePrice = await bookModel.updateMany({ rating: { $in: arrOfRatings } }, { $inc: { price: 10 } }, { new: true })



    res.send({ status: true, setHardCover: setHardCover, updatePice: updatePrice })


}
//*************************************************************************************************************** */





module.exports.myBook = createBook
module.exports.myGetBooks = getBook
module.exports.myUpdate = updateSpecificBooks