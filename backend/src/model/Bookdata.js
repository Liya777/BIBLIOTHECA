const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bookexchange');
const Schema = mongoose.Schema;

const BookSchema = new Schema({
    BookName: String,
    Author: String,
    Genre: String,
    Cover: String
});

const Bookdata = mongoose.model('bookdata', BookSchema);

module.exports = Bookdata;
