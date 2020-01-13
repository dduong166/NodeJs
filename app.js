const express = require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const hostname = '127.0.0.1';
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static('public'));

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.render('index', {
    name: "Default"
  });
});

app.get('/form', (req, res) => {
  res.render('form');
});

app.post('/post', (req, res) => {
  res.render('index', {
    name: req.body.textname
  })
})

app.get('/:name', (req, res) => {
  res.render('index', {
    name: req.params.name
  });
});
app.listen(port, hostname, () => {
  console.log(`Server is running at http://${hostname}:${port}/`);
});