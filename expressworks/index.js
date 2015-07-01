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
var server = app.listen(process.argv[2], function() {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);
});