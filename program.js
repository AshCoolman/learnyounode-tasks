
var fs = require('fs');
var filePath = process.argv[2]
var content = fs.readFileSync(filePath, {encoding: 'utf8'});

console.log(content.split('\n').length - 1);
