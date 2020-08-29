express = require('express');
const Book = require('../models/Book.model');
const User = require('../models/User.model');

exports.bookTest = (req, res) => {
    res.send("this is a test for the books route");
}

exports.createBook = async (req, res) => {
    try {
        await User.findById({ _id: req.user.id }).then((user) => {
            const book = Book.create({
                title: req.body.title,
                desc: req.body.desc,
                pub_date: req.body.pub_date,
                rating: req.body.rating,
                author: req.body.author,
                genre: req.body.genre,
                imagePath: req.body.imagePath
            })
            user.book.push(book);
            res.send({ msg: "book added!" });
        })
        } catch (err) {
            res.send(err)
        }
}