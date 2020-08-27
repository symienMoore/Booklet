const mongoose = require('mongoose')
var Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    }
})
