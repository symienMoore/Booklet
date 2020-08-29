const mongoose = require('mongoose')
var Schema = mongoose.Schema;

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
})
