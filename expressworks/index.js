var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();


app.use(bodyParser.urlencoded({extended: false}));

app.use('/', express.static('public'));

// http PUT http://localhost:3000/message/:45678765456789
app.put('/message/:id', function (req, res) {
    var rtn = crypto.createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex');

    res.end(rtn);
});
app.listen(process.argv[2]);