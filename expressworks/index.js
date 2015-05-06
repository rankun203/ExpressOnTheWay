var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static('public'));

// http://localhost:3000/message?id=45678765456789
// test: /search/?results=recent&amp;type=quote&amp;page=6
app.get('/search', function (req, res) {
    var rtn = crypto.createHash('sha1')
        .update(new Date().toDateString() + req.query.id)
        .digest('hex');

    res.send({
        results: req.query.results,
        type: req.query.type,
        page: req.query.page
    });
});
app.listen(process.argv[2]);