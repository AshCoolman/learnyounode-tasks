
var fs = require('fs');
var filePath = process.argv[2];
var filter = process.argv[3];

require(__dirname+'/mymodule')(filePath, filter, function (error, data) {
    if (error) {
        // Handle it
        console.log("ERROR", error.message);
    } else {
        console.log(data.join('\n'));
    }
});
