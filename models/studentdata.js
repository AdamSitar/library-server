const mongoose =require('mongoose');

const studentSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    library: {
        type: String, 
        required: true
    },
    booksBorrowed: {
        type: [String],
        required: true,
    },
    bookHistory: {
        type: [String],
        required: true
    }
})

var studentdata = mongoose.model('studentdata',studentSchema);
module.exports = studentdata;
