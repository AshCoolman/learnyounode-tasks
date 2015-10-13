var bl = require('bl'),
    http = require('http');

var nodeInit = process.argv[0],
    file = process.argv[1],
    url = process.argv[2] || 'http://www.google.com';

var client = http.get(url, function (request) {
    request.setEncoding('utf8');
    request.pipe(bl(function (err, data) {
        console.log(data.length);
        console.log(data.toString());
    }));
    // request.on('error', console.error);
    // request.on('data', console.log);
});

// console.log('client:', client)