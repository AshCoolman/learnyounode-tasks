var bl = require('bl'),
    http = require('http');

var nodeInit = process.argv[0],
    file = process.argv[1],
    urls = process.argv.splice(2, 3).reverse();



var printGet = function (url) {
    if (url) {
        http.get(url, function (request) {
            request.setEncoding('utf8');
            request.pipe(bl(function (err, data) {
                console.log(data.toString());
            }));
            request.on('end', function () {
                printGet(urls.pop());
            })
        });
    }
};
printGet(urls.pop());