const mongoose = require('mongoose')
var Schema = mongoose.Schema;
var User = require('./User')

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },

    desc: {
        type: String,
        required: true,
    },

    pub_date: {
        type: Date
    },

    rating: {
        type: Number,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    genre: {
        type: String,
        required: true
    },

    imagePath: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

})

const Book =  mongoose.model('Book', bookSchema);
module.exports = Book;