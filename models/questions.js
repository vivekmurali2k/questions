const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
    content: {
        type: 'string'
    },
    date: {
        type: Date,
        default: Date.now()
    }

});

module.exports = mongoose.model('questions', questionSchema);