var port = process.argv[2];

var getTime = function () {
    return require('moment')().format("YYYY-MM-DD hh:mm");
}

var server = require('net')
    .createServer(
        function (socket) {
            socket.end(getTime());
        }
    )
    .listen(port);