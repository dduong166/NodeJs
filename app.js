var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var bookController = require("./controller/book");
var data = require("./models/book");
//Connect DB
var mongoose = require('mongoose');
var mongoDB = 'mongodb://localhost:27017/booklib'
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useNewUrlParser: true,  useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs')


app.route('/books')
    .get(bookController.getAll)
    .post(bookController.create)
    .put()
    .delete();

app.route('/books/:id')
    .get(bookController.getOne)
    .post()
    .put(bookController.update)
    .delete(bookController.delete);

app.listen(8000);