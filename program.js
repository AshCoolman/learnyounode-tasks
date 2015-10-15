var map = require('through2-map'),
    http = require('http'),
    url = require('url'),
    moment = require('moment'),
    queryString = require('query-string');

var port = process.argv[2];
var DEFAULT_CONTENT_TYPE = { 'Content-Type': 'application/json' };
var DEFAULT_ENCODING = 'utf8'
var routes = {
    '/api/parsetime': function (isoTime) {
        var mnt = moment(isoTime);
        return {
            content: {
                "hour": mnt.hour(),
                "minute": mnt.minute(),
                "second": mnt.second()
            }
        };
    },
    '/api/unixtime': function (isoTime) {
        return {
            content: {
                "unixtime": moment(isoTime).valueOf()
            }
        };
    }
}

http.createServer(function (request, response) {
    request.setEncoding(DEFAULT_ENCODING);
    var urlObj = url.parse(request.url),
        queryObj = queryString.parse(urlObj.query),
        route = routes[urlObj.pathname],
        output = (route) ? route(queryObj.iso) :  null;

    if (route && output) {
        var contentType = output['type'] || DEFAULT_CONTENT_TYPE;
        var encoding = output['encoding'] || DEFAULT_ENCODING
        response.writeHead( 200, contentType ) ;
        response.end( JSON.stringify(output.content ), encoding);
    } else {
        response.writeHead(404);
    }
}).listen(port);