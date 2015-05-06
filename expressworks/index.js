var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join('./', 'templates'));
app.set('view engine', 'jade');

app.use(bodyParser.urlencoded({extended: false}));

app.get('/home', function (req, res) {
    res.render('index', {date: new Date().toDateString()});
});
app.listen(process.argv[2]);