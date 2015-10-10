
var fs = require('fs');
var filePath = process.argv[2];
var filter = process.argv[3];

fs.readdir(filePath, function (error, content) {
    content.forEach( function (element, index, array) {lea
        if (element.endsWith('.'+filter)) {
            console.log(element);
        }
    });
});

    // var fs = require('fs')
    // var path = require('path')

    // fs.readdir(process.argv[2], function (err, list) {
    //   list.forEach(function (file) {
    //     if (path.extname(file) === '.' + process.argv[3])
    //       console.log(file)
    //   })
    // })