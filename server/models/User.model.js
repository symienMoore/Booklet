const mongoose = rquire('mongoose');
var Schema = mongoose.Schema;
const bookSchema = require('../models/Book.model');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true,
        unique: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    password: {
        type: String,
        required: true,
        unique: true
    },

    createdAt: {
        type: Date, default: Date.now
    },

    Books: [
        bookSchema
    ]
})