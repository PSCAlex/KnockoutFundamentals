var mongoose = require('mongoose');

var model = mongoose.Schema({
    title:{
        type: String
    },
    author: {
        type: String
    },
    genre: {
        type: String
    },
    read:{
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Model', model)