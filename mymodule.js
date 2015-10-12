var fs = require('fs');
module.exports = function (filePath, filter, callback) {
    fs.readdir(filePath, function (error, content) {
        if (error) {
            return callback(error);
        }

        callback(null, content.filter( function (element, index, array) {
            return element.endsWith('.'+filter);
            })
        );
    });
};