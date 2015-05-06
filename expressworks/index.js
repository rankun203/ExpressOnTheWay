var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var crypto = require('crypto');

var app = express();


app.use(bodyParser.urlencoded({extended: false}));
app.use(require('stylus').middleware('public'));

app.use('/', express.static('public'));

app.put('/message/:id', function (req, res) {
    var rtn = crypto.createHash('sha1')
        .update(new Date().toDateString() + req.params.id)
        .digest('hex');

    res.end(rtn);
});
app.listen(process.argv[2]);