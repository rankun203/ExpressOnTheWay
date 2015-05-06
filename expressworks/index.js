var express = require('express');
var fs = require('fs');

var app = express();

app.use('/', express.static('public'));

app.get('/books', function (req, res) {
    var file = process.argv[3];

    fs.readFile(file, function(err, data) {
        if (err) return res.sendStatus(500);

        res.json(JSON.parse(data));
    });
});
app.listen(process.argv[2]);