const mongoose = require('mongoose');

const librarySchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
})

var librarydata = mongoose.model('librarydata',librarySchema);
module.exports = librarydata;
