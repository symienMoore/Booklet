var Book = require('../models/Book');
var User = require('../models/User.js');


exports.bookTest = (req, res) => {
    res.send("this is a test for the books route");
}

exports.createBook = async (req, res) => {
        await User.findById({ _id: req.user.id }).then(async (user) => {
            const book = await Book.create({
                title: req.body.title,
                desc: req.body.desc,
                pub_date: req.body.pub_date,
                rating: req.body.rating,
                author: req.body.author,
                genre: req.body.genre,
                imagePath: req.body.imagePath,
                user: req.user.id
            })
           res.send({mes: "book added!", status: 200})
        })
        
}