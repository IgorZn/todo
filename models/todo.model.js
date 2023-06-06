const mongoose = require('mongoose');

const ToDo = new mongoose.Schema({
    name: {
        type: String,
        trim: true
    },
    body: {
        type: String,
        trim: true
    },
    done: {
        type: Boolean,
        default: false
    }

}, {
    timestamps: true
});


module.exports = mongoose.model('Todo', ToDo);