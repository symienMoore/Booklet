var Book = require('../models/Book');
var User = require('../models/User.js');


exports.bookTest = (req, res) => {
    res.send("this is a test for the books route");
}

exports.createBook = async (req, res) => {
    try {
        const url = req.protocol + '://' + req.get("host");
        await User.findById({ _id: req.user.id }).then(async (user) => {
            await Book.create({
                title: req.body.title,
                desc: req.body.desc,
                pub_date: req.body.pub_date,
                rating: req.body.rating,
                author: req.body.author,
                genre: req.body.genre,
                imagePath: url + "/images/" + req.file.filename,
                user: req.user.id
            })
           res.send({mes: "book added!", status: 200})
        })
    } catch (error) {
        console.log(error)
    }
 
        
}

exports.getAllBooks = async (req, res) => {
    await Book.find().then((books) => {
        res.send(books)
    })
}

exports.getBookById = async (req, res) => {
    try {
        await Book.findOne({ _id: req.params.id }).then((book) => {
            return res.status(200).json(book)
        })     
    } catch (error) {
        console.log(error)
  }
}

exports.editBook = async (req, res) => {
    try {
        const url = req.protocol + '://' + req.get("host");
        await Book.findByIdAndUpdate({ _id: req.params.id })
            .then(book => {
            console.log(book + " found book")
            // book.update({
            //     title: req.body.title,
            //     desc: req.body.desc,
            //     pub_date: req.body.pub_date,
            //     rating: req.body.rating,
            //     author: req.body.author,
            //     genre: req.body.genre,
            //     // imagePath: url + "/images/" + req.file.filename,
            // })
            //     console.log(book)
            //     res.send(book)
        })
    } catch (err) {
        console.log(err)
    }
}