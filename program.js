
var port = process.argv[2],
    file = process.argv[3];

var fileReadStream = require('fs').createReadStream(file);
var server = require('http')
    .createServer(
        function (request, response) {
            fileReadStream.pipe(response);
        }
    )
    .listen(port);