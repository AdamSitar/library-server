const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },   
    isBorrowed: {
        type: Boolean,
        required: true
    },
    library: {
        type: String,
        required: true
    }
})

var bookdata = mongoose.model('bookdata',bookSchema);
module.exports = bookdata;
