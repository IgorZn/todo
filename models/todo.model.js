const mongoose = require('mongoose');

const ToDo = new mongoose.Schema({
    Name: {
        type: String,
        trim: true
    },
    Body: {
        type: String,
        trim: true
    },

}, {
    timestamps: true
});


module.exports = mongoose.model('Todo', ToDo);