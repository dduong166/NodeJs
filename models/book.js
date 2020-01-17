var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: String,
    summary: String,
    author: String,
    isbn: String
});

const BookModel = mongoose.model('Book', BookSchema);
module.exports = BookModel;

