var map = require('through2-map'),
    http = require('http');

var port = process.argv[2];

http.createServer(function (request, response) {
    request.setEncoding('utf8');
    request
        .pipe( map( function (chunk) { return chunk.toString().toUpperCase();} ) )
        .pipe( response );
}).listen(port);