
var mongoose = require('mongoose');

module.exports = mongoose.model('Message', {
    msg: String,
    //grabing user object id
    user: {type: mongoose.Schema.ObjectId,
    //builds a relationship between tables
    ref: 'User'}
});